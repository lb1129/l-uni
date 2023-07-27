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
	 * 获取用户菜单
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async getMenu(ops = {}) {
		const {
			userId,
			// PC APP
			type
		} = ops
		try {
			const db = uniCloud.database()
			const collection = db.collection('menu')
			const res = await collection.field({
				user_id: false
			}).where({
				type
				// TODO 菜单还不能新增 暂不按用户查
				// user_id: userId
			}).get()
			const menu = res.data
			// 构建树形结构
			function loop(parent) {
				parent.forEach(par => {
					const children = menu.filter(item => item.parent_id === par._id)
					par.children = children
					if (children.length) loop(children)
				})
			}
			let result = menu.filter(item => !item.parent_id)
			loop(result)
			return success(result)
		} catch (e) {
			return fail('获取菜单失败，请重试')
		}
	}
}