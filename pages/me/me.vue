<template>
	<view class="me-header">
		<app-avatar src="/static/image/user.png" width="75px" height="75px" :custom-style="{
			margin: '45px 0 10px 0'
		}"></app-avatar>
		<view>
			<text>{{$userInfo.userName}}</text>
		</view>
	</view>
	<uni-list>
		<uni-list-item :title="$t('personalInfo')" link to="/pages/personal-center/personal-info/personal-info" />
		<uni-list-item :title="$t('systemSetting')" link to="/pages/personal-center/system-setting/system-setting" />
		<uni-list-item :title="$t('privacyPolicy')" link to="/pages/personal-center/privacy-policy/privacy-policy" />
		<uni-list-item :title="$t('aboutUs')" link to="/pages/personal-center/about-us/about-us" />
		<uni-list-item :title="$t('logOut')" clickable @click="logOutHandler" show-arrow />
	</uni-list>
</template>

<script>
	import {
		tokenStorage
	} from '@/storage/index.js'
	import {
		logoutServe
	} from '@/serves/login.js'
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
					cancelText: this.$t('cancel'),
					confirmText: this.$t('confirm'),
					success: async (res) => {
						if (res.confirm) {
							uni.showToast({
								icon: 'none',
								title: this.$t('signingOutPleaseWait'),
								mask: true,
								duration: 60000
							})
							try {
								await logoutServe()
								tokenStorage.clear()
								uni.hideToast()
								uni.reLaunch({
									url: '/pages/login/login'
								})
							} catch (e) {
								uni.hideToast()
							}
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