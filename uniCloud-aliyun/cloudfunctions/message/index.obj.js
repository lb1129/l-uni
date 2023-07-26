// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const {
	success,
	fail
} = require('response-common')
const {
	isNoValue
} = require('validate-common')
module.exports = {
	_before: function() { // 通用预处理器

	},
	/**
	 * 通过id批量设置为已读
	 * @param {object} ops {ids: string[]}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async setMessageRead(ops = {}) {
		const {
			ids
		} = ops

		if (isNoValue(ids)) return fail('缺失ids')

		try {
			const db = uniCloud.database()
			const collection = db.collection('message')
			const dbCmd = db.command
			await collection.where({
				_id: dbCmd.in(ids)
			}).update({
				read: true,
				update_date: Date.now()
			})
			return success()
		} catch (e) {
			return fail('消息设为已读失败，请重试')
		}
	},
	/**
	 * 通过id获取消息
	 * @param {object} ops {id: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async getMessageById(ops = {}) {
		const {
			id
		} = ops

		if (isNoValue(id)) return fail('缺失id')

		try {
			const db = uniCloud.database()
			const collection = db.collection('message')
			const res = await collection.doc(id).get()
			if (res.affectedDocs) {
				return success(res.data[0])
			}
			return fail('消息不存在')
		} catch (e) {
			return fail('消息获取失败，请重试')
		}
	},
	/**
	 * 新增消息
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async addMessage(ops = {}) {
		const {
			userId,
			title,
			content,
			payload
		} = ops

		if (isNoValue(title)) return fail('缺失标题')
		if (isNoValue(content)) return fail('缺失内容')

		try {
			const db = uniCloud.database()
			const collection = db.collection('message')
			const addRes = await collection.add({
				user_id: userId,
				title,
				content,
				payload,
				read: false,
				create_date: Date.now()
			})
			return success(addRes.id)
		} catch (e) {
			return fail('消息新增失败，请重试')
		}
	},
	/**
	 * 通过id批量删除消息
	 * @param {object} ops {ids: string[]}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async deleteMessageByIds(ops = {}) {
		const {
			ids
		} = ops

		if (isNoValue(ids)) return fail('缺失ids')

		try {
			const db = uniCloud.database()
			const collection = db.collection('message')
			const dbCmd = db.command
			await collection.where({
				_id: dbCmd.in(ids)
			}).remove()
			return success(true)
		} catch (e) {
			return fail('消息删除失败，请重试')
		}
	},
	/**
	 * 获取消息集合
	 * @param {object} ops {pageNo: number, pageSize: number}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async getMessages(ops = {}) {
		let {
			pageNo,
			pageSize,
			createDate
		} = ops

		if (isNoValue(pageSize)) return fail('缺失pageSize')
		if (isNoValue(createDate)) createDate = Date.now()

		try {
			const db = uniCloud.database()
			const dbCmd = db.command
			const collection = db.collection('message').field({
				user_id: false
			})
			const totalRes = await collection.count()
			let res = await collection.where({
				create_date: dbCmd.lt(createDate)
			}).limit(pageSize).orderBy("create_date",
				"desc").get()
			return success({
				pageNo,
				pageSize,
				data: res.data,
				total: totalRes.total
			})
		} catch (e) {
			return fail('消息获取失败，请重试')
		}
	}
}