import App from './App.vue'
import {
	createSSRApp
} from 'vue'
import {
	createI18n
} from 'vue-i18n'
import store from '@/store/index.js'
import messages from './locale/index.js'
// #ifdef MP-WEIXIN
import {
	camelCase
}
from 'lodash-es'
// #endif

const i18nConfig = {
	locale: uni.getLocale(),
	messages
}
const i18n = createI18n(i18nConfig)

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
			})
		}
	})
	return {
		app
	}
}