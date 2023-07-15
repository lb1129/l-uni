import userData from './userData.json'
import userMenuData from './userMenuData.json'

const response = (res, data, message, status) => {
	res.statusCode = status ?? 200
	res.data = {
		data,
		message: message ?? 'ok'
	}
}

const mockServer = (req, res) => {
	const url = req.url
	if (/api\/login/.test(url)) {
		const {
			userName,
			password
		} = req.data
		const userInfo = userData[userName]
		if (!userInfo || password !== 'a123456') {
			response(res, null, '用户名或密码错误', 400)
		} else {
			const token = userInfo.userName
			response(res, token)
		}
	} else if (/api\/logout/.test(url)) {
		response(res, null)
	} else if (/api\/menu/.test(url)) {
		const token = req.header.Authorization
		if (token) {
			const menu = userMenuData[token]
			response(res, menu)
		} else {
			response(res, false, '未登录', 401)
		}
	} else if (/api\/userInfo/.test(url)) {
		const token = req.header.Authorization
		if (token) {
			const userInfo = userData[token]
			response(res, userInfo)
		} else {
			response(res, false, '未登录', 401)
		}
	} else if (/api\/isLogin/.test(url)) {
		const token = req.header.Authorization
		if (token) {
			response(res, true)
		} else {
			response(res, false, '未登录', 401)
		}
	}
}

export default mockServer