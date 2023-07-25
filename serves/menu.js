import {
	menu_get_api
} from '@/interceptor/request/api.js'

export const getMenuServe = () => uni.request({
	url: menu_get_api
})