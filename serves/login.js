import isAuthenticated from '@/interceptor/router/isAuthenticated.js'
import {
	login_api,
	logout_api,
	isLogin_api
} from '@/interceptor/request/api.js'
import {
	loginServeMock,
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
	isAuthenticated.value = p
	return p
}

export const logoutServe = () => {
	// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
	const p = logoutServeMock({
		url: logout_api
	})
	isAuthenticated.value = new Promise((resolve, reject) => {
		p.then(reject).catch(resolve)
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