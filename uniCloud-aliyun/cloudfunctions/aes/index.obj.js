// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const crypto = require('crypto-common')
const {
	success,
	fail
} = require('response-common')
const keys = require('./keys.js')
const secret = crypto.enc.Utf8.parse(keys.secret)
const iv = crypto.enc.Utf8.parse(keys.iv)
module.exports = {
	_before: function() { // 通用预处理器

	},
	/**
	 * AES加密
	 * @params {object} ops {data: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	encrypt(ops) {
		const {
			data
		} = ops
		try {
			const ciphertext = crypto.AES.encrypt(crypto.enc.Utf8.parse(data), secret, {
				iv,
				mode: crypto.mode.CBC,
				padding: crypto.pad.Pkcs7
			}).ciphertext
			return success(crypto.enc.Hex.stringify(ciphertext))
		} catch (e) {
			return fail('加密失败')
		}
	},

	/**
	 * AES解密
	 * @params {object} ops {data: string}
	 * @returns {object} {errCode: number, errMsg: string, data: any}
	 */
	decrypt(ops) {
		const {
			data
		} = ops
		try {
			return success(crypto.AES.decrypt(crypto.enc.Base64.stringify(crypto.enc.Hex.parse(data)), secret, {
				iv,
				mode: crypto.mode.CBC,
				padding: crypto.pad.Pkcs7
			}).toString(crypto.enc.Utf8))
		} catch (e) {
			return fail('解密失败')
		}
	}
}