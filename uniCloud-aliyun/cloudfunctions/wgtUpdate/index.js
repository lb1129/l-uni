'use strict';
const {
	success,
	fail
} = require('response-common')
const wgtInfo = require('./wgtInfo.json')
/**
 * wgt更新
 * @param {object} ops {version: string}
 * @returns {object} {errCode: number, errMsg: string, data: any}
 */
exports.main = async (event = {}, context) => {
	const {
		version
	} = event
	if (wgtInfo.version !== version) {
		return success(wgtInfo.url)
	}
	return fail('已是最新版本')
}