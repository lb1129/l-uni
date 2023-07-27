'use strict';
const {
	success,
	fail
} = require('response-common')
const axios = require('axios-common')
exports.main = async (event, context) => {

	try {
		
		// const res1 = await axios.post('https://api.next.bspapp.com/client', {
		// 	method: 'serverless.auth.user.anonymousAuthorize',
		// 	params: {},
		// 	spaceId: 'mp-d2e0b969-5400-4832-adeb-d0127579976e',
		// 	timestamp: Date.now()
		// }, {
		// 	headers: {
		// 		'x-serverless-sign': 'cef85247e2f1e9bcc2098cd9aa8a0104'
		// 	}
		// })

		// const res2 = await axios.post('https://api.next.bspapp.com/client', {
		// 	method: 'serverless.file.resource.generateProximalSign',
		// 	params: {
		// 		'env': 'public',
		// 		'filename': '1690392981499.jpeg'
		// 	},
		// 	spaceId: 'mp-d2e0b969-5400-4832-adeb-d0127579976e',
		// 	timestamp: Date.now(),
		// 	token: res1.data.accessToken
		// }, {
		// 	headers: {
		// 		'x-basement-token': res1.data.accessToken,
		// 		'x-serverless-sign': '5e29ecabbc182bb9ce3fb3e159d507c6'
		// 	}
		// })

		// const res3 = await axios.post(
		// 	'https://file-univjthjni-mp-d2e0b969-5400-4832-adeb-d0127579976e.oss-cn-zhangjiakou.aliyuncs.com/', {
		// 		'Cache-Control': 'max-age=2592000',
		// 		'Content-Disposition': 'attachment',
		// 		OSSAccessKeyId: res2.data.accessKeyId,
		// 		Signature: res2.data.signature,
		// 		host: res2.data.host,
		// 		id: res2.data.id,
		// 		key: res2.data.ossPath,
		// 		policy: res2.data.policy,
		// 		success_action_status: 200,
		// 		'x-oss-security-token': res2.data.securityToken,
		// 		callback: res2.data.ossCallbackUrl
		// 	}, {
		// 		headers: {
		// 			'X-OSS-server-side-encrpytion': 'AES256'
		// 		}
		// 	})
	} catch (e) {
		return fail('上传参数获取失败，请重试')
	}

}