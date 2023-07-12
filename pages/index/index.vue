<template>
	<view>
		<text>{{$t('hello')}}</text>
		<uni-icons custom-prefix="customicons" type="youxi"></uni-icons>
		<uni-icons type="color"></uni-icons>
		<picker @change="localeChange" :value="index" range-key="label" :range="locales">
			<button>{{$t('settingLocale')}}</button>
		</picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				locales: [
					{value: 'en', label: 'English'},
					{value: 'zh-Hans', label: '简体中文'}
				]
			}
		},
		onLoad() {
			const systemInfo = uni.getSystemInfoSync()
			this.isAndroid = systemInfo.platform.toLowerCase() === 'android'
			const currentLocale = uni.getLocale();
			this.index = this.locales.findIndex(item => item.value === currentLocale)
		},
		methods: {
			localeChange(event) {
				const index = event.detail.value
				// 未改变不切换
				if(index === this.index) return
				const locale = this.locales[index].value
				if (this.isAndroid) {
					// 将重启应用
					uni.showModal({
						content: this.$t('languageChangeConfirm'),
						success: (res) => {
							if (res.confirm) {
								uni.setLocale(locale);
								this.index = index;
							}
						}
					})
				} else {
					uni.setLocale(locale);
					this.$i18n.locale = locale;
					this.index = index;
				}
			}
		}
	}
</script>

<style>

</style>