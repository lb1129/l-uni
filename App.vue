<script>
	import {
		themeStorage
	} from '@/storage/index'
	import {
		mapActions
	} from 'vuex'
	export default {
		onLaunch: function() {
			const theme = themeStorage.get()
			if (theme) {
				this.setTheme(theme)
			}
		},
		onShow: function() {},
		onHide: function() {},
		methods: {
			...mapActions(['setTheme'])
		}
	}
</script>

<style lang="scss">
	// 自定义字体图标
	@import '@/static/customicons.css';
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	@import '@/uni.scss';

	// 设置整个项目的背景色
	page {
		background-color: $app-grey;
	}

	/* #endif */
</style>