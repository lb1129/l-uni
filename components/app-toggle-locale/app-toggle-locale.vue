<template>
	<uni-data-checkbox :model-value="locale" @update:modelValue="changeHandler"
		:localdata="locales"></uni-data-checkbox>
</template>

<script>
	export default {
		name: "app-toggle-locale",
		data() {
			return {
				locale: 'zh-Hans',
				locales: [{
						value: 'en',
						text: 'English'
					},
					{
						value: 'zh-Hans',
						text: '简体中文'
					}
				]
			};
		},
		created() {
			const systemInfo = uni.getSystemInfoSync()
			this.isAndroid = systemInfo.platform.toLowerCase() === 'android'
			this.locale = uni.getLocale();
		},
		methods: {
			changeHandler(locale) {
				// 未改变不切换
				if (locale === this.locale) return
				if (this.isAndroid) {
					uni.showModal({
						content: this.$t('languageChangeConfirm'),
						success: (res) => {
							if (res.confirm) {
								// 将重启应用
								uni.setLocale(locale);
								this.locale = locale;
							}
						}
					})
				} else {
					uni.setLocale(locale);
					this.$i18n.locale = locale;
					this.locale = locale;
				}
			}
		}
	}
</script>

<style>

</style>