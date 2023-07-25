import {
	userInfo_get_api,
	userInfo_edit_api,
	userInfo_set_phone_api
} from '@/interceptor/request/api.js'

export const getUserInfoServe = () => uni.request({
	url: userInfo_get_api
})

export const editUserInfoServe = (userInfo) => uni.request({
	url: userInfo_edit_api,
	data: userInfo
})

export const setPhoneServe = (ops) => uni.request({
	url: userInfo_set_phone_api,
	data: {
		phone: Number(ops.phone),
		code: ops.code
	},
	method: 'POST'
})