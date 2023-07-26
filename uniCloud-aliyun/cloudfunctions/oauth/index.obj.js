// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const {
	success,
	fail
} = require('response-common')
const axios = require('axios-common')
const {
	sign
} = require('jwt-common')
const wx = require('./wx.json')
module.exports = {
	_before: function() { // 通用预处理器

	},
	/**
	 * 微信登录
	 * @param {object} ops {code: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async loginByWx(ops = {}) {
		const {
			code,
			userInfo
		} = ops
		try {
			const wxRes = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
				params: {
					appid: wx.AppID,
					secret: wx.AppSecret,
					js_code: code,
					grant_type: 'authorization_code',
				}
			})

			if (!wxRes.data.openid) {
				return fail(wxRes.data.errmsg)
			}

			const {
				openid,
				session_key
			} = wxRes.data

			const db = uniCloud.database()
			// 已创建 返回token
			const res = await db.collection('user').where({
				openid
			}).get()
			if (res.affectedDocs) {
				const userId = res.data[0]._id
				const jwt = sign({
					userId
				})
				// token session 写入
				await uniCloud.redis().set(userId, jwt, 'EX', 24 * 60 * 60)
				return success(jwt)
			}
			// 否则 创建微信用户
			const addRes = await db.collection('user').add({
				openid,
				username: null,
				nickname: userInfo.nickName,
				password: null,
				phone: null,
				avatar: userInfo.avatarUrl
			})
			const jwt = sign({
				userId: addRes.id
			})
			// token session 写入
			await uniCloud.redis().set(addRes.id, jwt, 'EX', 24 * 60 * 60)
			return success(jwt)
		} catch (e) {
			return fail('微信登录失败，请重试')
		}
	}
}