import {
	sendCode_api,
	wgtUpdate_api
} from '@/interceptor/request/api.js'

export const sendCodeServe = (phone) => uni.request({
	url: sendCode_api,
	data: {
		phone
	}
})

export const wgtUpdateServe = (version) => uni.request({
	url: wgtUpdate_api,
	hiddenErrMsg: true,
	data: {
		version
	}
})