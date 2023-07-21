// 公用模块用法请参考 https://uniapp.dcloud.io/uniCloud/cf-common
module.exports = {
	success(data = null, errCode = 0, errMsg = 'success') {

		return {
			errCode,
			errMsg,
			data
		}
	},
	fail(errMsg = 'fail', errCode = 1) {
		return {
			errCode,
			errMsg,
			data: null
		}
	}
}