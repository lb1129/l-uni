// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const {
	success,
	fail
} = require('response-common')
const {
	getPublicKey,
	encrypt,
	decrypt
} = require('rsa-common')
module.exports = {
	_before: function() { // 通用预处理器

	},
	/**
	 * 获取rsa加密公钥
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	getPublicKey() {
		try {
			return success(getPublicKey())
		} catch (e) {
			return fail('获取公钥失败')
		}
	},
	/**
	 * rsa加密
	 * @params {object} ops {data: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	encrypt(ops) {
		const {
			data
		} = ops
		try {
			return success(encrypt(data))
		} catch (e) {
			return fail('加密失败')
		}
	},

	/**
	 * rsa解密
	 * @params {object} ops {data: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	decrypt(ops) {
		const {
			data
		} = ops
		try {
			return success(decrypt(data))
		} catch (e) {
			return fail('解密失败')
		}
	}

}