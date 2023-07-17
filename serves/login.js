import isAuthenticated from '@/auth/isAuthenticated.js'
import {
	login_api,
	login_wx_api,
	logout_api,
	isLogin_api
} from '@/interceptor/request/api.js'
import {
	loginServeMock,
	loginByWxServeMock,
	logoutServeMock,
	isLoginServeMock
} from '@/mock/index.js'

export const loginServe = (ops) => {
	// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
	const p = loginServeMock({
		url: login_api,
		data: ops,
		method: 'POST'
	})
	isAuthenticated.value = new Promise((resolve, reject) => {
		p.then(() => {
			resolve('isAuthenticated true')
		}).catch(() => {
			reject('isAuthenticated false')
		})
	})
	return p
}

export const loginByWxServe = (ops) => {
	// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
	const p = loginByWxServeMock({
		url: login_wx_api,
		data: ops,
		method: 'POST'
	})
	isAuthenticated.value = new Promise((resolve, reject) => {
		p.then(() => {
			resolve('isAuthenticated true')
		}).catch(() => {
			reject('isAuthenticated false')
		})
	})
	return p
}

export const logoutServe = () => {
	// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
	const p = logoutServeMock({
		url: logout_api
	})
	isAuthenticated.value = new Promise((resolve, reject) => {
		p.then(() => {
			reject('isAuthenticated false')
		}).catch(() => {
			resolve('isAuthenticated true')
		})
	})
	return p
}

export const isLoginServe = () => {
	// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
	const p = isLoginServeMock({
		url: isLogin_api
	})
	isAuthenticated.value = p
	return p
}