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
	 * 通过id获取产品
	 * @param {object} ops {id: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async getProductById(ops = {}) {
		const {
			id
		} = ops

		if (isNoValue(id)) return fail('缺失id')

		try {
			const db = uniCloud.database()
			const collection = db.collection('product')
			const res = await collection.doc(id).get()
			if (res.affectedDocs) {
				return success(res.data[0])
			}
			return fail('产品不存在')
		} catch (e) {
			return fail('产品获取失败，请重试')
		}
	},
	/**
	 * 保存产品
	 * @param {object} ops {id?: string, name: string, brand: string, category: string, price: number, color: string, style: string, enable: boolean, inventory: number, describe: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async saveProduct(ops = {}) {
		const {
			id,
			name,
			brand,
			category,
			price,
			color,
			style,
			enable,
			inventory,
			describe,
			images,
			userId
		} = ops

		// 新增
		if (isNoValue(id)) {
			if (isNoValue(name)) return fail('缺失名称')
			if (isNoValue(brand)) return fail('缺失品牌')
			if (isNoValue(category)) return fail('缺失分类')
			if (isNoValue(price)) return fail('缺失价格')
		}

		try {
			const db = uniCloud.database()
			const collection = db.collection('product')
			// 编辑
			if (id) {
				await collection.doc(id).update({
					user_id: userId,
					name,
					brand,
					category,
					price,
					color,
					style,
					enable,
					inventory,
					describe,
					images,
					update_date: Date.now()
				})
				return success(id)
			} else { // 新增
				const addRes = await collection.add({
					user_id: userId,
					name,
					brand,
					category,
					price,
					color,
					style,
					enable,
					inventory,
					describe,
					images,
					create_date: Date.now()
				})
				return success(addRes.id)
			}
		} catch (e) {
			return fail('产品保存失败，请重试')
		}
	},
	/**
	 * 通过id批量删除产品
	 * @param {object} ops {ids: string[]}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async deleteProductByIds(ops = {}) {
		const {
			ids
		} = ops

		if (isNoValue(ids)) return fail('缺失ids')

		try {
			const db = uniCloud.database()
			const collection = db.collection('product')
			const dbCmd = db.command
			await collection.where({
				_id: dbCmd.in(ids)
			}).remove()
			return success()
		} catch (e) {
			return fail('产品删除失败，请重试')
		}
	},
	/**
	 * 获取产品集合
	 * @param {object} ops {pageNo: number, pageSize: number, keyword?: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	async getProducts(ops = {}) {
		let {
			pageNo,
			pageSize,
			keyword,
			createDate
		} = ops

		if (isNoValue(pageSize)) return fail('缺失pageSize')
		if (isNoValue(createDate)) createDate = Date.now()

		try {
			const db = uniCloud.database()
			const dbCmd = db.command
			let collection = db.collection('product').field({
				user_id: false
			})
			if (!isNoValue(keyword)) {
				collection = collection.where({
					name: new RegExp(`^${keyword}`, 'i')
				})
			}
			const totalRes = await collection.count()
			let res = await collection.where({
				create_date: dbCmd.lt(createDate)
			}).limit(pageSize).orderBy("create_date", "desc").get()
			return success({
				pageNo,
				pageSize,
				data: res.data,
				total: totalRes.total
			})
		} catch (e) {
			return fail('产品获取失败，请重试')
		}
	}
}