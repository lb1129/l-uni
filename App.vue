<script>
	import {
		themeStorage
	} from '@/storage/index.js'
	import {
		mapActions
	} from 'vuex'
	// #ifdef APP-PLUS
	import '@/interceptor/chooseImage/index.js'
	// #endif
	import '@/interceptor/request/index.js'
	// #ifndef H5
	import '@/interceptor/router/index.js'
	// #endif
	import {
		isLoginServe
	} from '@/serves/login.js'
	import {
		getMenuServe,
		getUserInfoServe
	} from '@/serves/user.js'
	// #ifdef H5
	import isAuthenticated from '@/interceptor/router/isAuthenticated.js'
	import {
		authenticatePageUrls,
		specialPageUrls
	} from '@/interceptor/router/pages.js'
	import h5404 from '@/pages/h5-404/h5-404.vue'
	// #endif
	export default {
		created() {
			// 初始主题色
			const theme = themeStorage.get()
			if (theme) {
				this.setTheme(theme)
			}
			// 如果已登录 获取用户信息 菜单数据 并更新 store
			isLoginServe().then(async () => {
				try {
					getUserInfoServe().then(res => {
						this.setUserInfo(res.data)
					})
					getMenuServe().then(res => {
						this.setMenuData(res.data)
					})
				} catch (e) {}
			})
			// #ifdef H5
			// H5 添加404路由 导航守卫控制是否已登录跳转
			this.$router.addRoute({
				path: '/:pathMatch(.*)*',
				component: h5404
			})
			this.$router.beforeEach(async (to, from) => {
				const url = to.path
				try {
					await isAuthenticated.value
					if (authenticatePageUrls.includes(url)) {
						uni.switchTab({
							url: '/pages/home/home'
						})
						return false
					}
				} catch (e) {
					if (!authenticatePageUrls.includes(url) && !specialPageUrls.includes(url)) {
						uni.reLaunch({
							url: '/pages/login/login'
						})
						return false
					}
				}
			})
			// #endif
		},
		onLaunch() {
			// Launch todo
		},
		onShow() {},
		onHide() {},
		methods: {
			...mapActions(['setTheme', 'setUserInfo', 'setMenuData'])
		}
	}
</script>

<style lang="scss">
	// 自定义字体图标
	@import '@/static/customicons.css';
	// uni-ui公共css
	@import '@/uni_modules/uni-scss/index.scss';

	// 设置整个项目的背景色
	page {
		background-color: $uni-bg-color;
	}

	/* #ifdef H5 */
	body {
		overflow-x: hidden !important;
	}

	/* #endif */
</style>