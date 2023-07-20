'use strict';
const response = require('response-common')
const wgtInfo = require('./wgtInfo.json')
exports.main = async (event, context) => {
	const {
		version
	} = event
	if (wgtInfo.version !== version) {
		return response(wgtInfo.url)
	}
	return response(null, 1, '已是最新版本')
}