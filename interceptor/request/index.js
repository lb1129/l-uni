import {
	tokenStorage
} from '@/storage/index.js'
import isAuthenticated from '@/auth/isAuthenticated.js'
import config from '@/config.json'

const baseUrl = config.baseUrl
const timeout = config.timeout

uni.addInterceptor('request', {
	invoke(args) {
		if (!/^http/.test(args.url)) {
			// 补全url
			args.url = `${baseUrl}${args.url}`
			if (!args.header) args.header = {}
			// 请求头 Bearer token
			args.header.Authorization = tokenStorage.get()
			// 请求头 语言
			args.header['Accept-Language'] = uni.getLocale()
		}
		if (!args.timeout) args.timeout = timeout
	},
	async returnValue(p) {
		const res = await p
		// 成功 返回 data
		if (res.statusCode >= 200 && res.statusCode < 300) {
			// 开发环境 log data
			if (process.env.NODE_ENV === 'development')
				console.log(res.data)
			return res.data
		} else {
			// 401 跳转登录页
			if (res.statusCode === 401) {
				isAuthenticated.value = Promise.reject('isAuthenticated false')
				tokenStorage.clear()
				uni.reLaunch({
					url: '/pages/login/login'
				})
			} else {
				// 其他状态码 进行提示
				uni.showToast({
					icon: 'none',
					title: `${res.data.message}`
				})
			}
			throw res
		}
	}
})