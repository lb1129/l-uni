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
	import {
		isLoginServe
	} from '@/serves/login.js'
	import {
		getMenuServe,
		getUserInfoServe
	} from '@/serves/user.js'
	// #ifdef APP-PLUS
	import wgtUpdate from '@/common/wgtUpdate.js'
	// #endif
	export default {
		onLaunch() {
			// #ifdef APP-PLUS  
			wgtUpdate()
			// #endif
			// 初始主题色
			const theme = themeStorage.get()
			if (theme) {
				this.setTheme(theme)
			}
			// 如果已登录 获取用户信息 菜单数据 并更新 store
			isLoginServe().then(() => {
				const pages = getCurrentPages()
				const page = pages[pages.length - 1]
				if (page && page.route !== 'pages/home/home')
					uni.switchTab({
						url: '/pages/home/home'
					})
				getUserInfoServe().then(res => {
					this.setUserInfo(res.data)
				})
				getMenuServe().then(res => {
					this.setMenuData(res.data)
				})
			}).catch(e => {})
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
	@import '@/static/iconfont.css';
	// uni-ui公共css
	@import '@/uni_modules/uni-scss/index.scss';

	// 设置整个项目的背景色
	page {
		background-color: $uni-bg-color;
	}
</style>