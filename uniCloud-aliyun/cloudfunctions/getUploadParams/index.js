'use strict';
const {
	success,
	fail
} = require('response-common')
const axios = require('axios-common')
const crypto = require('crypto-common')

const sign = function(e, t) {
	let n = "";
	Object.keys(e).sort().forEach((function(t) {
		e[t] && (n = n + "&" + t + "=" + e[t])
	}))
	n = n.slice(1);
	return n
}

const spaceId = 'mp-d2e0b969-5400-4832-adeb-d0127579976e'
const clientSecret = 'KmNJV9LHw1QwP16A3dSwPA=='

exports.main = async (event = {}, context) => {

	const {
		ext
	} = event

	try {
		const data1 = {
			method: "serverless.auth.user.anonymousAuthorize",
			params: "{}",
			spaceId,
			timestamp: Date.now()
		}
		const res1 = await axios.post('https://api.next.bspapp.com/client', data1, {
			headers: {
				'x-serverless-sign': crypto.HmacMD5(sign(data1, clientSecret),
					clientSecret).toString()
			}
		})

		const data2 = {
			method: 'serverless.file.resource.generateProximalSign',
			params: JSON.stringify({
				'env': 'public',
				'filename': `${Date.now()}${ext}`
			}),
			spaceId,
			timestamp: Date.now(),
			token: res1.data.data.accessToken
		}
		const res2 = await axios.post('https://api.next.bspapp.com/client', data2, {
			headers: {
				'x-basement-token': res1.data.data.accessToken,
				'x-serverless-sign': crypto.HmacMD5(sign(data2, clientSecret),
					clientSecret).toString()
			}
		})

		const callback = crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(JSON.stringify({
			"callbackUrl": res2.data.data.ossCallbackUrl,
			"callbackBody": JSON.stringify({
				"fileId": res2.data.data.id,
				spaceId
			}),
			"callbackBodyType": "application/json"
		})))

		// headers: {
		// 	'X-OSS-server-side-encrpytion': 'AES256'
		// }

		return success({
			'Cache-Control': 'max-age=2592000',
			'Content-Disposition': 'attachment',
			OSSAccessKeyId: res2.data.data.accessKeyId,
			Signature: res2.data.data.signature,
			host: res2.data.data.host,
			id: res2.data.data.id,
			key: res2.data.data.ossPath,
			policy: res2.data.data.policy,
			success_action_status: 200,
			'x-oss-security-token': res2.data.data.securityToken,
			callback
		})
	} catch (e) {
		return fail('上传参数获取失败，请重试')
	}
}