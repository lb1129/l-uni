import isAuthenticated from '@/interceptor/router/isAuthenticated.js'
import {
	authenticatePageUrls,
	specialPageUrls
} from './pages.js'
import {
	pathFull
} from '@/common/pathFull.js'

// 非H5端 路由跳转方法拦截器 处理应用内跳转

const validate = async (args) => {
	const url = pathFull(args.url)
	try {
		await isAuthenticated.value
		if (authenticatePageUrls.includes(url)) {
			uni.switchTab({
				url: '/pages/home/home'
			})
			return Promise.reject(args)
		} else {
			return args
		}
	} catch (e) {
		if (!authenticatePageUrls.includes(url) && !specialPageUrls.includes(url)) {
			uni.reLaunch({
				url: '/pages/login/login'
			})
			return Promise.reject(args)
		} else {
			return args
		}
	}
}

uni.addInterceptor('navigateTo', {
	invoke(args) {
		return validate(args)
	}
})

uni.addInterceptor('redirectTo', {
	invoke(args) {
		return validate(args)
	}
})

uni.addInterceptor('reLaunch', {
	invoke(args) {
		return validate(args)
	}
})

uni.addInterceptor('switchTab', {
	invoke(args) {
		return validate(args)
	}
})