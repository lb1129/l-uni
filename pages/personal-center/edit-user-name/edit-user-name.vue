<template>
	<uni-easyinput :primary-color="$theme" focus :input-border="false" v-model="innerValue"
		:placeholder="$t('pleaseEnterUserName')"></uni-easyinput>
	<view class="edit-user-name">
		<text class="edit-user-name-text">{{$t('userNameRule')}}</text>
		<app-gap gap="50px"></app-gap>
		<app-button :loading="loading" @click="confirmHandler">{{$t('confirm')}}</app-button>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				innerValue: '',
				loading: false
			}
		},
		methods: {
			confirmHandler() {
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
					this.loading = true
					// call edit userInfo api
					// update userInfo store

					// mock serve
					setTimeout(() => {
						this.setUserInfo({
							userName: this.innerValue
						})
						this.loading = false
						uni.navigateBack()
					}, 500)
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