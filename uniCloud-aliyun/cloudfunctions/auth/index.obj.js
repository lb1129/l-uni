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
const lodash = require('lodash-common')
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

		let rsaDecryptRes
		try {
			// rsa解密
			const rsaObj = uniCloud.importObject('rsa')
			rsaDecryptRes = await rsaObj.decrypt({
				data: password
			})
		} catch (e) {
			return fail('密码未正确加密')
		}

		// aes加密
		const aesObj = uniCloud.importObject('aes')
		const aesEncryptRes = await aesObj.encrypt({
			data: rsaDecryptRes.data
		})

		try {
			const db = uniCloud.database()
			const dbCmd = db.command
			const res = await db.collection('user').where(dbCmd.or({
				username: dbCmd.eq(username),
				password: dbCmd.eq(aesEncryptRes.data)
			}, {
				phone: dbCmd.eq(Number(username)),
				password: dbCmd.eq(aesEncryptRes.data)
			})).get()
			if (res.affectedDocs) {
				const userId = res.data[0]._id
				const jwt = sign({
					userId
				})
				// token session 写入
				await uniCloud.redis().set(userId, jwt, 'EX', 24 * 60 * 60)
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
	 * 退出登录
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async logout(ops = {}) {
		// 将 token 失效
		const {
			userId
		} = ops
		try {
			// token session 清除
			await uniCloud.redis().del(userId)
			return success(true)
		} catch (e) {
			return fail('退出登录失败，请重试')
		}
	},
	/**
	 * 注册
	 * @param {object} ops {username: string, password: string, phone: number, code: number}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async register(ops = {}) {
		const {
			username,
			password,
			phone,
			code
		} = ops

		if (isNoValue(username)) return fail('缺失用户名')
		if (isNoValue(password)) return fail('缺失密码')
		if (isNoValue(phone)) return fail('缺失手机号')
		if (!lodash.isNumber(phone)) return fail('手机号字段类型不正确')
		if (!isPhone(phone)) return fail('手机号格式不正确')
		if (isNoValue(code)) return fail('缺失验证码')

		let rsaDecryptRes
		try {
			// rsa解密
			const rsaObj = uniCloud.importObject('rsa')
			rsaDecryptRes = await rsaObj.decrypt({
				data: password
			})
			if (!rsaDecryptRes.data) {
				return fail('密码未正确加密')
			}
			if (!isPassword(rsaDecryptRes.data)) {
				return fail('密码应为7-10个字符，由数字，英文大小写组成')
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
			// aes加密
			const aesObj = uniCloud.importObject('aes')
			const aesEncryptRes = await aesObj.encrypt({
				data: rsaDecryptRes.data
			})
			const addRes = await collection.add({
				username,
				// nickname 默认 username
				nickname: username,
				password: aesEncryptRes.data,
				phone,
				// 默认头像
				avatar: 'https://mp-d2e0b969-5400-4832-adeb-d0127579976e.cdn.bspapp.com/user.png',
				// 简介
				profile: '',
				create_date: Date.now()
			})
			return success(addRes.id)
		} catch (e) {
			return fail('用户创建失败，请重试')
		}
	},
	/**
	 * 找回密码
	 * @param {object} ops {password: string, phone: number, code: number}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async findPassword(ops = {}) {
		const {
			password,
			phone,
			code
		} = ops

		if (isNoValue(password)) return fail('缺失密码')
		if (isNoValue(phone)) return fail('缺失手机号')
		if (!lodash.isNumber(phone)) return fail('手机号字段类型不正确')
		if (!isPhone(phone)) return fail('手机号格式不正确')
		if (isNoValue(code)) return fail('缺失验证码')

		let rsaDecryptRes
		try {
			// rsa解密
			const rsaObj = uniCloud.importObject('rsa')
			rsaDecryptRes = await rsaObj.decrypt({
				data: password
			})
			if (!rsaDecryptRes.data) {
				return fail('密码未正确加密')
			}
			if (!isPassword(rsaDecryptRes.data)) {
				return fail('密码应为7-10个字符，由数字，英文大小写组成')
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
			// aes加密
			const aesObj = uniCloud.importObject('aes')
			const aesEncryptRes = await aesObj.encrypt({
				data: rsaDecryptRes.data
			})
			const res = await collection.where({
				phone
			}).update({
				password: aesEncryptRes.data,
				update_date: Date.now()
			})
			if (!res.updated) return fail('手机号未绑定用户')
			return success(true)
		} catch (e) {
			return fail('找回密码失败，请重试')
		}
	}
}