// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const {
	success,
	fail
} = require('response-common')
const {
	isPhone,
	isPassword,
	isNoValue
} = require('validate-common')
const {
	sign
} = require('jwt-common')

module.exports = {
	_before: function() {

	},
	/**
	 * 登录
	 * @param {object} ops {username: string|number, password: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async login(ops = {}) {
		const {
			username,
			password
		} = ops

		if (isNoValue(username)) return fail('缺失用户名')
		if (isNoValue(password)) return fail('缺失密码')

		try {
			const db = uniCloud.database()
			const dbCmd = db.command
			const res = await db.collection('user').where(dbCmd.or({
				username: dbCmd.eq(username),
				password: dbCmd.eq(password)
			}, {
				phone: dbCmd.eq(username),
				password: dbCmd.eq(password)
			})).get()
			if (res.affectedDocs) {
				const jwt = sign({
					userId: res.data[0]._id
				})
				return success(jwt)
			}
			return fail('用户名或密码错误')
		} catch (e) {
			return fail('登录失败，请重试')
		}
	},
	/**
	 * 是否已登录
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async isLogin(ops = {}) {
		return success(true)
	},
	/**
	 * 注册
	 * @param {object} ops {username: string, password: string, confirmPassword: string, phone: number, code: number}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async register(ops = {}) {
		const {
			username,
			password,
			confirmPassword,
			phone,
			code
		} = ops

		if (isNoValue(username)) return fail('缺失用户名')
		if (isNoValue(password)) return fail('缺失密码')
		if (password !== confirmPassword) return fail('两次密码输入不一致')
		if (isNoValue(phone)) return fail('缺失手机号')
		if (!isPhone(phone)) return fail('手机号格式不正确')
		if (isNoValue(code)) return fail('缺失验证码')

		try {
			const aes = uniCloud.importObject('aes')
			const decryptRes = await aes.decrypt({
				data: password
			})
			if (!decryptRes.data) {
				return fail('密码未正确加密')
			}
			if (decryptRes.data.length < 7 || decryptRes.data.length > 10) {
				return fail('密码长度应控制在7-10之间')
			}
			if (!isPassword(decryptRes.data)) {
				return fail('密码应为数字，英文大小写的组合')
			}
		} catch (e) {
			return fail('密码未正确加密')
		}

		try {
			const hadCode = await uniCloud.redis().get(phone)
			if (isNoValue(hadCode)) return fail('请先获取验证码')
			if (hadCode !== String(code)) return fail('验证码不匹配')

			const db = uniCloud.database()
			const collection = db.collection('user')
			const hadUsernameRes = await collection.where({
				username
			}).get()
			if (hadUsernameRes.affectedDocs) {
				return fail('用户名重复')
			}
			const hadPhoneRes = await collection.where({
				phone
			}).get()
			if (hadPhoneRes.affectedDocs) {
				return fail('手机号重复')
			}
			const addRes = await collection.add({
				username,
				password,
				phone
			})
			return success(addRes.id)
		} catch (e) {
			return fail('用户创建失败，请重试')
		}
	},
	/**
	 * 找回密码
	 * @param {object} ops {password: string, confirmPassword: string, phone: number, code: number}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async findPassword(ops = {}) {
		const {
			password,
			confirmPassword,
			phone,
			code
		} = ops

		if (isNoValue(password)) return fail('缺失密码')
		if (password !== confirmPassword) return fail('两次密码输入不一致')
		if (isNoValue(phone)) return fail('缺失手机号')
		if (!isPhone(phone)) return fail('手机号格式不正确')
		if (isNoValue(code)) return fail('缺失验证码')

		try {
			const aes = uniCloud.importObject('aes')
			const decryptRes = await aes.decrypt({
				data: password
			})
			if (!decryptRes.data) {
				return fail('密码未正确加密')
			}
			if (decryptRes.data.length < 7 || decryptRes.data.length > 10) {
				return fail('密码长度应控制在7-10之间')
			}
			if (!isPassword(decryptRes.data)) {
				return fail('密码应为数字，英文大小写的组合')
			}
		} catch (e) {
			return fail('密码未正确加密')
		}

		try {
			const hadCode = await uniCloud.redis().get(phone)
			if (isNoValue(hadCode)) return fail('请先获取验证码')
			if (hadCode !== String(code)) return fail('验证码不匹配')

			const db = uniCloud.database()
			const collection = db.collection('user')
			const res = await collection.where({
				phone
			}).update({
				password
			})
			return success()
		} catch (e) {
			return fail('找回密码失败，请重试')
		}
	},
	/**
	 * 通过用户id获取用户信息
	 * @param {object} ops {id: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async getUserById(ops = {}) {
		const {
			id
		} = ops

		if (isNoValue(id)) return fail('缺失id')

		try {
			const db = uniCloud.database()
			const res = await db.collection('user').doc(id).field({
				password: false
			}).get()
			if (res.affectedDocs) {
				return success(res.data[0])
			}
			return fail('用户不存在')
		} catch (e) {
			return fail('获取用户失败，请重试')
		}
	}
}