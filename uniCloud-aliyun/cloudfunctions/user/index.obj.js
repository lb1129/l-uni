// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const {
	success,
	fail
} = require('response-common')
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
				password: false
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
	 * 编辑当前登录用户信息
	 * @param {object} ops {}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async editUserInfo(ops = {}) {
		const {
			userId,
			username
		} = ops

		try {
			const db = uniCloud.database()
			await db.collection('user').doc(userId).update({
				username
			})
			return success(userId)
		} catch (e) {
			return fail('更新用户信息失败，请重试')
		}
	}
}