import isAuthenticated from '@/interceptor/router/isAuthenticated.js'
import {
	login_api,
	logout_api,
	isLogin_api
} from '@/interceptor/request/api.js'

export const loginServe = (ops) => {
	const p = uni.request({
		url: login_api,
		data: ops,
		method: 'POST'
	})
	isAuthenticated.value = p
	return p
}

export const logoutServe = () => {
	const p = uni.request({
		url: logout_api
	})
	isAuthenticated.value = new Promise((resolve, reject) => {
		p.then(reject).catch(resolve)
	})
	return p
}

export const isLoginServe = () => {
	const p = uni.request({
		url: isLogin_api
	})
	isAuthenticated.value = p
	return p
}