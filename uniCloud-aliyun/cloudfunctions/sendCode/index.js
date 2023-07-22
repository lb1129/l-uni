'use strict';
const {
	success,
	fail
} = require('response-common')
const {
	validatePhone
} = require('validate-common')

/**
 * 发送手机短信验证码
 * @param {object} event {phone: number}
 * @returns {object} {errCode: number, errMsg: string, data: any}
 */
exports.main = async (event = {}, context) => {
	const {
		phone
	} = event
	// TODO 开通短信服务 新增uni-cloud-sms扩展 调用 uniCloud.sendSms
	if (!validatePhone(phone))
		return fail('手机号格式不正确')
	const code = Math.floor(Math.random() * 89999 + 10000)
	// 以手机号为key加入redis
	// 60s过期
	const res = await uniCloud.redis().set(phone, code, 'EX', 60)
	return success(code)
};