// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const {
	success,
	fail
} = require('response-common')
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
		try {
			const db = uniCloud.database()
			const dbCmd = db.command
			const res = await db.collection('user').where(dbCmd.or({
				username,
				password
			}, {
				phone: username,
				password
			})).get()
			if (res.affectedDocs) {
				// TODO 生成token返回
				return success(res.data[0]._id)
			}
			return fail('用户名或密码错误')
		} catch (e) {
			return fail('登录失败，请重试')
		}
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
		if (!username) {
			return fail('缺失用户名')
		}
		// TODO 密码格式正确性验证
		if (!password) {
			return fail('缺失密码')
		}
		if (password !== confirmPassword) {
			return fail('两次密码输入不一致')
		}
		// TODO 手机号格式正确性验证
		if (!phone) {
			return fail('缺失手机号')
		}
		// TODO 验证码正确性验证
		if (!code) {
			return fail('缺失验证码')
		}
		try {
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
		// TODO 密码格式正确性验证
		if (!password) {
			return fail('缺失密码')
		}
		if (password !== confirmPassword) {
			return fail('两次密码输入不一致')
		}
		// TODO 手机号格式正确性验证
		if (!phone) {
			return fail('缺失手机号')
		}
		// TODO 验证码正确性验证
		if (!code) {
			return fail('缺失验证码')
		}
		try {
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