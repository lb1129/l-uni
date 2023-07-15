import {
	tokenStorage
} from '@/storage/index.js'
import mockServer from '@/mock/index.js'
import {
	authenticatePageUrls,
	specialPageUrls
} from '@/interceptor/router/pages.js'
import {
	pathFull
} from '@/common/pathFull.js'
import isAuthenticated from '@/interceptor/router/isAuthenticated.js'

// mock serve baseUrl 真实环境请切换
// #ifdef H5 | APP-PLUS
const baseUrl = ''
// #endif
// #ifdef MP
const baseUrl = 'http://mock.server.com'
// #endif
const timeout = 60000

uni.addInterceptor('request', {
	invoke(args) {
		if (!/^http/.test(args.url)) {
			// 补全url
			args.url = `${baseUrl}${args.url}`
			if (!args.header) args.header = {}
			// // 请求头 token
			args.header.Authorization = tokenStorage.get()
			// 请求头 语言
			args.header['Accept-Language'] = uni.getLocale()
		}
		if (!args.timeout) args.timeout = timeout
	},
	success(res, req) {
		// mock server
		mockServer(req, res)
	},
	async returnValue(p) {
		const res = await p
		// 成功 返回 data
		if (res.statusCode >= 200 && res.statusCode < 300) {
			return res.data
		} else {
			// 401 跳转登录页
			if (res.statusCode === 401) {
				const pages = getCurrentPages()
				const page = pages[pages.length - 1]
				// 所在页面无需登录 则不做处理 
				if (![...authenticatePageUrls, ...specialPageUrls].some(url => pathFull(page.route))) {
					isAuthenticated.value = Promise.reject()
					tokenStorage.clear()
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
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