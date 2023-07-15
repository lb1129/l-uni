import {
	menu_api,
	userInfo_api
} from '@/interceptor/request/api.js'

export const getMenuServe = () => uni.request({
	url: menu_api
})

export const getUserInfoServe = () => uni.request({
	url: userInfo_api
})