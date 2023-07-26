import App from './App.vue'
import {
	createSSRApp
} from 'vue'
import store from '@/store/index.js'
import i18n from '@/locale/i18n.js'

// #ifdef MP-WEIXIN
import {
	camelCase
}
from 'lodash-es'
// #endif

export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	app.use(store)
	app.mixin({
		computed: {
			$theme() {
				return this.$store.state.theme
			},
			$userInfo() {
				return this.$store.state.userInfo
			}
		},
		onShow() {
			// 页面onShow时 处理原生导航栏背景多主题，导航栏标题多语言，tabbar多主题多语言
			let time = 0
			// #ifdef APP-PLUS
			time = 60
			// #endif
			setTimeout(() => {
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				// 有页面时
				if (page) {
					const themeVal = this.$theme.slice(1)
					// 设置导航栏背景色
					uni.setNavigationBarColor({
						frontColor: '#ffffff',
						backgroundColor: this.$theme
					})
					// tabBar页面时
					if (page.route === 'pages/home/home' || page.route === 'pages/me/me') {
						// 设置tabBar
						uni.setTabBarItem({
							index: 0,
							// #ifdef MP-WEIXIN
							text: this.$t('home'),
							// #endif
							selectedIconPath: `/static/tabbar/home-${themeVal}.png`,
						})
						uni.setTabBarItem({
							index: 1,
							// #ifdef MP-WEIXIN
							text: this.$t('me'),
							// #endif
							selectedIconPath: `/static/tabbar/message-${themeVal}.png`,
						})
						uni.setTabBarItem({
							index: 2,
							// #ifdef MP-WEIXIN
							text: this.$t('message'),
							// #endif
							selectedIconPath: `/static/tabbar/user-${themeVal}.png`,
						})
						uni.setTabBarStyle({
							selectedColor: this.$theme
						})
					}
					// #ifdef MP-WEIXIN
					const arr = page.route.split('/')
					const str = arr[arr.length - 1]
					uni.setNavigationBarTitle({
						title: this.$t(camelCase(str))
					})
					// #endif
				}
			}, time)
		}
	})
	return {
		app
	}
}