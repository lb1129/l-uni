'use strict';
const {
	success,
	fail
} = require('response-common')
exports.main = async (event, context) => {
	const {
		file
	} = event
	console.log(file)
	// let result = await uniCloud.uploadFile({
	// 	cloudPath: "test.png",
	// 	fileContent: file
	// })
	// console.log(result)
	if (file) {
		return success(file.name)
	}
	return fail('上传失败')
}