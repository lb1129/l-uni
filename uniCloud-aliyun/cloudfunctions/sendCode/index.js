'use strict';
const {
	success,
	fail
} = require('response-common')
/**
 * 发送手机短信验证码
 * @param {object} event {phone: number}
 * @returns {object} {errCode: number, errMsg: string, data: any}
 */
exports.main = async (event = {}, context) => {
	const {
		phone
	} = event
	// TODO 调用三方短信服务

	return success(1234)
};