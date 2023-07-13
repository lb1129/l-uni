<template>
	<view class="me-header">
		<app-avatar src="/static/image/user.png" width="75px" height="75px" :custom-style="{
			margin: '45px 0 10px 0'
		}"></app-avatar>
		<view>
			<text>viho</text>
		</view>
	</view>
	<uni-list>
		<uni-list-item :title="$t('personalInfo')" link to="/pages/personal-center/info/info" />
		<uni-list-item :title="$t('setting')" link to="/pages/personal-center/setting/setting" />
		<uni-list-item :title="$t('serviceAgreement')" link
			to="/pages/personal-center/service-agreement/service-agreement" />
		<uni-list-item :title="$t('privacyPolicy')" link to="/pages/personal-center/privacy-policy/privacy-policy" />
		<uni-list-item :title="$t('aboutUs')" link to="/pages/personal-center/about-us/about-us" />
		<uni-list-item :title="$t('logOut')" clickable @click="logOutHandler" show-arrow />
	</uni-list>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			logOutHandler() {
				uni.showModal({
					title: this.$t('tip'),
					content: this.$t('areYouSureToLogOut'),
					success: (res) => {
						if (res.confirm) {
							// TODO call logout api
							uni.showLoading({
								title: this.$t('signingOutPleaseWait'),
								mask: true
							})
							setTimeout(() => {
								uni.hideLoading()
								uni.redirectTo({
									url: '/pages/login/login'
								})
							}, 500)
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.me-header {
		height: 185px;
		text-align: center;
	}
</style>