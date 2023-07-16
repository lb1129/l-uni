import {
	menu_api,
	userInfo_api
} from '@/interceptor/request/api.js'
import {
	menuServeMock,
	userInfoServeMock,
	userInfoPostServeMock
} from '@/mock/index.js'

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const getMenuServe = () => menuServeMock({
	url: menu_api
})

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const getUserInfoServe = () => userInfoServeMock({
	url: userInfo_api
})

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const editUserInfoServe = (userInfo) => userInfoPostServeMock({
	url: userInfo_api,
	data: userInfo
})