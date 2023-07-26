// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const {
	success,
	fail
} = require('response-common')
const {
	isPhone,
	isNoValue
} = require('validate-common')
const lodash = require('lodash-common')
module.exports = {
	_before: function() { // 通用预处理器

	},
	/**
	 * 获取当前登录用户信息
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async getUserInfo(ops = {}) {
		const {
			userId
		} = ops

		try {
			const db = uniCloud.database()
			const res = await db.collection('user').doc(userId).field({
				password: false,
				openid: false
			}).get()
			if (res.affectedDocs) {
				return success(res.data[0])
			}
			return fail('用户不存在')
		} catch (e) {
			return fail('获取用户失败，请重试')
		}
	},
	/**
	 * 编辑当前登录用户信息（昵称 | 头像）
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async editUserInfo(ops = {}) {
		const {
			userId,
			nickname,
			avatar
		} = ops

		try {
			const db = uniCloud.database()
			await db.collection('user').doc(userId).update({
				nickname,
				avatar,
				update_date: Date.now()
			})
			return success(userId)
		} catch (e) {
			return fail('更新用户信息失败，请重试')
		}
	},
	/**
	 * 设置手机号（初始化 | 更新）
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async setPhone(ops = {}) {
		const {
			userId,
			phone,
			code
		} = ops

		if (isNoValue(phone)) return fail('缺失手机号')
		if (!lodash.isNumber(phone)) return fail('手机号字段类型不正确')
		if (!isPhone(phone)) return fail('手机号格式不正确')
		if (isNoValue(code)) return fail('缺失验证码')

		try {
			const hadCode = await uniCloud.redis().get(phone)
			if (isNoValue(hadCode)) return fail('请先获取验证码')
			if (hadCode !== String(code)) return fail('验证码不匹配')

			const db = uniCloud.database()
			const collection = db.collection('user')

			const hadPhoneRes = await collection.where({
				phone
			}).get()
			if (hadPhoneRes.affectedDocs) {
				return fail('手机号重复')
			}
			await collection.doc(userId).update({
				phone,
				update_date: Date.now()
			})
			return success(true)
		} catch (e) {
			return fail('设置手机号失败，请重试')
		}
	},
	/**
	 * 设置客户端推送标识（初始化 | 更新）
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async setPushClientId(ops = {}) {
		const {
			userId,
			cid
		} = ops

		if (isNoValue(cid)) return fail('缺失cid')

		try {
			const db = uniCloud.database()
			await db.collection('user').doc(userId).update({
				cid
			})
			return success(true)
		} catch (e) {
			return fail('设置客户端推送标识失败，请重试')
		}
	}
}