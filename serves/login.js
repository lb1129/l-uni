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

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const loginServe = (ops) => loginServeMock({
	url: login_api,
	data: ops,
	method: 'POST'
})


// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const loginByWxServe = (ops) => loginByWxServeMock({
	url: login_wx_api,
	data: ops,
	method: 'POST'
})


// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const logoutServe = () => logoutServeMock({
	url: logout_api
})


// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const isLoginServe = () => isLoginServeMock({
	url: isLogin_api
})