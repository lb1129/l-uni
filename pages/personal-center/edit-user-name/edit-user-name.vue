<template>
	<uni-easyinput :primary-color="$theme" focus :input-border="false" v-model="innerValue"
		:placeholder="$t('pleaseEnterUserName')"></uni-easyinput>
	<view class="edit-user-name">
		<text class="edit-user-name-text">{{$t('userNameRule')}}</text>
		<app-gap gap="50px"></app-gap>
		<app-button @click="confirmHandler">{{$t('confirm')}}</app-button>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import {
		editUserInfoServe
	} from '@/serves/user.js'
	export default {
		data() {
			return {
				innerValue: ''
			}
		},
		methods: {
			async confirmHandler() {
				const len = this.innerValue.length
				let message = ''
				if (len < 4 || len > 10) {
					message = this.$t('incorrectUsernameLength')
				} else if (!/^[\u4e00-\u9fa5A-Za-z0-9_-]+$/.test(this.innerValue)) {
					message = this.$t('incorrectUsernameFormat')
				}
				if (message) {
					uni.showToast({
						icon: 'none',
						title: message
					})
				} else {
					try {
						const res = await editUserInfoServe({
							userName: this.innerValue
						})
						this.setUserInfo(res.data)
						uni.navigateBack()
					} catch (e) {}
				}
			},
			...mapActions(['setUserInfo'])
		},
		watch: {
			'$userInfo.userName': {
				handler(newValue) {
					this.innerValue = newValue
				},
				immediate: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.edit-user-name {
		padding: 0 16px;

		&-text {
			font-size: 14px;
			color: $uni-extra-color;
		}
	}
</style>