'use strict';
const {
	success,
	fail
} = require('response-common')
const {
	verify
} = require('jwt-common')
const exclude = require('./exclude.js')
const authorize = require('./authorize.js')
let upperCaseExclude = {}
exclude.forEach(arr => {
	upperCaseExclude[arr.map(item => item.toUpperCase()).join()] = true
})
let upperCaseAuthorize = {}
authorize.forEach(arr => {
	upperCaseAuthorize[arr.map(item => item.toUpperCase()).join()] = true
})

exports.main = async (event = {}, context) => {
	// url化的出口
	let {
		path,
		headers,
		queryStringParameters,
		body,
		isBase64Encoded
	} = event

	// 拆解 path
	const pathArr = path.split('/').filter(Boolean)
	const len = pathArr.length

	// 要排除的云对象方法或云函数
	if (len === 1 || len === 2) {
		if (upperCaseExclude[pathArr.map(path => path.toUpperCase()).join()]) {
			return {
				"mpserverlessComposedResponse": true,
				"statusCode": 404,
				"headers": {
					'content-type': 'application/json'
				},
				"body": JSON.stringify(fail('404'))
			}
		}
	}

	// 校验token的云对象方法或云函数
	let authorize = {}
	if (len === 1 || len === 2) {
		if (upperCaseAuthorize[pathArr.map(path => path.toUpperCase()).join()]) {
			const authorization = headers.authorization
			if (!authorization) return {
				"mpserverlessComposedResponse": true,
				"statusCode": 401,
				"headers": {
					'content-type': 'application/json'
				},
				"body": JSON.stringify(fail('未登录'))
			}
			const token = authorization.replace(/^Bearer\s+/, "")
			const res = verify(token)
			if (!res) {
				return {
					"mpserverlessComposedResponse": true,
					"statusCode": 401,
					"headers": {
						'content-type': 'application/json'
					},
					"body": JSON.stringify(fail('未登录'))
				}
			}
			// token session 校验
			const currentToken = await uniCloud.redis().get(res.userId)
			if (!currentToken || currentToken !== token) {
				return {
					"mpserverlessComposedResponse": true,
					"statusCode": 401,
					"headers": {
						'content-type': 'application/json'
					},
					"body": JSON.stringify(fail('未登录'))
				}
			}
			authorize.userId = res.userId
		}
	}

	// 组合 入参
	// base64编码 解码
	if (isBase64Encoded) {
		body = Buffer.from(body, 'base64').toString('utf8')
	}
	// data默认值
	let data = {}
	try {
		// json反序列化
		if (headers['content-type'] === 'application/json') {
			data = JSON.parse(body)
		}
		// query body 入参合并
		data = {
			...queryStringParameters,
			...data,
			...authorize
		}
	} catch (e) {
		data = {
			...queryStringParameters,
			...authorize
		}
	}

	// 为云函数
	if (len === 1) {
		try {
			const fnRes = await uniCloud.callFunction({
				name: pathArr[0],
				data
			})
			if (fnRes.success) {
				if (!fnRes.result) {
					return {
						"mpserverlessComposedResponse": true,
						"statusCode": 200,
						"headers": {
							'content-type': 'application/json'
						},
						"body": JSON.stringify(success())
					}
				}
				if (fnRes.result.errCode === 0) {
					return {
						"mpserverlessComposedResponse": true,
						"statusCode": 200,
						"headers": {
							'content-type': 'application/json'
						},
						"body": JSON.stringify(fnRes.result)
					}
				}
				return {
					"mpserverlessComposedResponse": true,
					"statusCode": 400,
					"headers": {
						'content-type': 'application/json'
					},
					"body": JSON.stringify(fnRes.result)
				}
			} else {
				return {
					"mpserverlessComposedResponse": true,
					"statusCode": 500
				}
			}
		} catch (e) {
			if (e.code === 'NOT_FOUND') {
				return {
					"mpserverlessComposedResponse": true,
					"statusCode": 404,
					"headers": {
						'content-type': 'application/json'
					},
					"body": JSON.stringify(fail('404'))
				}
			}
			if (e.message) {
				if (e.message === 'Method name required' || e.message.indexOf('not_found') !== -1) {
					return {
						"mpserverlessComposedResponse": true,
						"statusCode": 404,
						"headers": {
							'content-type': 'application/json'
						},
						"body": JSON.stringify(fail('404'))
					}
				}
			}
			return {
				"mpserverlessComposedResponse": true,
				"statusCode": 500
			}
		}
	} else if (len === 2) {
		// 为云对象
		const obj = uniCloud.importObject(pathArr[0])
		try {
			const ObjFnRes = await obj[pathArr[1]](data)
			return {
				"mpserverlessComposedResponse": true,
				"statusCode": 200,
				"headers": {
					'content-type': 'application/json'
				},
				"body": JSON.stringify(ObjFnRes ? ObjFnRes : success())
			}
		} catch (e) {
			if (e.message) {
				if (e.message.indexOf('not_found') !== -1 || e.message.indexOf('not found') !== -1 || e.message
					.indexOf(
						'private method') !== -1)
					return {
						"mpserverlessComposedResponse": true,
						"statusCode": 404,
						"headers": {
							'content-type': 'application/json'
						},
						"body": JSON.stringify(fail('404'))
					}
			}
			if (e.detail) {
				return {
					"mpserverlessComposedResponse": true,
					"statusCode": 400,
					"headers": {
						'content-type': 'application/json'
					},
					"body": JSON.stringify(e.detail)
				}
			}
			return {
				"mpserverlessComposedResponse": true,
				"statusCode": 500
			}
		}
	} else {
		// 否则直接404
		return {
			"mpserverlessComposedResponse": true,
			"statusCode": 404,
			"headers": {
				'content-type': 'application/json'
			},
			"body": JSON.stringify(fail('404'))
		}
	}


	// {
	//     path: 'HTTP请求路径，如 /hello',
	//     httpMethod: 'HTTP请求方法，如 GET',
	//     headers: {HTTP请求头},
	//     queryStringParameters: {HTTP请求的Query，键值对形式},
	//     body: 'HTTP请求体',
	//     isBase64Encoded: 'true or false，表示body是否为Base64编码'
	// }

	// {
	//     "mpserverlessComposedResponse": true, // 使用阿里云返回集成响应是需要此字段为true
	//     "isBase64Encoded": true|false,
	//     "statusCode": httpStatusCode,
	//     "headers": { "headerName": "headerValue", ... },
	//     "body": "..."
	// }

};