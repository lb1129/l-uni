<template>
	<uni-list>
		<app-picker :range="locales" range-key="text" :value="localeIndex" @change="localeChangeHandler">
			<uni-list-item :title="$t('language')" show-arrow />
		</app-picker>
		<app-picker :range="themes" :value="themeIndex" @change="themeChangeHandler">
			<template v-slot:default>
				<uni-list-item :title="$t('theme')" show-arrow />
			</template>
			<template v-slot:render="{record}">
				<view style="padding: 10px 0;">
					<view :style="{
					display: 'inline-block',
					width: '30px',
					height: '30px',
					backgroundColor: record
				}"></view>
				</view>
			</template>
		</app-picker>
	</uni-list>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	// #ifdef MP-WEIXIN
	import {
		camelCase
	}
	from 'lodash-es'
	// #endif
	import {
		themeStorage
	} from '@/storage/index'
	export default {
		data() {
			return {
				localeIndex: 0,
				locales: [{
						value: 'en',
						text: 'English'
					},
					{
						value: 'zh-Hans',
						text: '简体中文'
					}
				],
				themes: [
					'#007aff',
					'#f5222d',
					'#faad14',
					'#13c2c2',
					'#52c41a',
					'#2f54eb',
					'#722ed1',
					'#f29cb1'
				]
			}
		},
		computed: {
			themeIndex() {
				return this.themes.findIndex(theme => theme === this.$theme)
			}
		},
		created() {
			const systemInfo = uni.getSystemInfoSync()
			this.isAndroid = systemInfo.platform.toLowerCase() === 'android'
			const locale = uni.getLocale();
			this.localeIndex = this.locales.findIndex(item => item.value === locale)
		},
		methods: {
			themeChangeHandler(e) {
				const theme = this.themes[e.detail.value]
				if (this.$theme !== theme) {
					this.setTheme(theme)
					// 设置导航栏背景色
					uni.setNavigationBarColor({
						frontColor: '#ffffff',
						backgroundColor: theme
					})
					// theme本地存储
					themeStorage.set(theme)
				}
			},
			localeChangeHandler(e) {
				const index = e.detail.value
				// 未改变不切换
				if (index === this.localeIndex) return
				const locale = this.locales[index].value
				// #ifdef APP-PLUS
				uni.showModal({
					content: this.$t('languageChangeConfirm'),
					success: (res) => {
						if (res.confirm) {
							// 将重启应用
							uni.setLocale(locale);
						}
					}
				})
				// #endif
				// #ifndef APP-PLUS
				uni.setLocale(locale);
				this.$i18n.locale = locale;
				this.localeIndex = index;
				// #endif
				// #ifdef MP-WEIXIN
				this.$nextTick(() => {
					const pages = getCurrentPages();
					const page = pages[pages.length - 1];
					const arr = page.route.split('/')
					const str = arr[arr.length - 1]
					uni.setNavigationBarTitle({
						title: this.$t(camelCase(str))
					})
				})
				// #endif
			},
			...mapActions([
				'setTheme'
			])
		}
	}
</script>

<style>

</style>