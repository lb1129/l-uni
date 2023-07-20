module.exports = function(data = null, errCode = 0, errMsg = 'success') {
	// 公用模块用法请参考 https://uniapp.dcloud.io/uniCloud/cf-common
	return {
		errCode,
		errMsg,
		data
	}
}