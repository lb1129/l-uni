'use strict';
const {
	success,
	fail
} = require('response-common')
const {
	isNoValue
} = require('validate-common')

const uniPush = uniCloud.getPushManager({
	appId: "__UNI__C9C6C5A"
})

exports.main = async (event = {}, context) => {
	const {
		userIds,
		title,
		content,
		payload,
		// 是否自动创建“通知栏消息”
		force_notification = false
	} = event

	if (isNoValue(title)) return fail('缺失title')
	if (isNoValue(content)) return fail('缺失content')
	if (isNoValue(payload)) return fail('缺失payload')

	try {
		// 通过 userIds 获取 push_clientid
		const db = uniCloud.database()
		const dbcmd = db.command
		const res = await db.collection('user').where({
			_id: dbcmd.in(userIds)
		}).field({
			cid: true
		}).get()

		const cids = []
		const messageObj = uniCloud.importObject('message')
		res.data.forEach(async (item) => {
			if (item.cid) {
				cids.push(item.cid)
				// 消息入库
				await messageObj.addMessage({
					userId: item._id,
					title,
					content,
					payload
				})
			}
		})

		const pushRes = await uniPush.sendMessage({
			push_clientid: cids,
			title,
			content,
			payload,
			force_notification
		})
		if (pushRes.errCode !== 0) {
			return fail(pushRes.errMsg)
		}
		return success(true)
	} catch (e) {
		return fail('消息发送失败，请重试')
	}
}