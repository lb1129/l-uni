<template>
	<uni-easyinput :primary-color="$theme" focus :input-border="false" v-model="innerValue"
		:placeholder="$t('pleaseEnterUserName')"></uni-easyinput>
	<view class="edit-nickname">
		<text class="edit-nickname-text">{{$t('userNameRule')}}</text>
		<app-gap gap="50px"></app-gap>
		<app-button :loading="loading" @click="confirmHandler">{{$t('confirm')}}</app-button>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				innerValue: '',
				loading: false
			}
		},
		computed: {
			...mapGetters(['nickname'])
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
					// call edit nickname api
					// update userInfo store
					// this.setUserInfo(userInfo)
					this.loading = true
					setTimeout(() => {
						this.loading = false
						uni.navigateBack()
					}, 500)
				}
			},
			...mapActions(['setUserInfo'])
		},
		watch: {
			nickname(newValue) {
				this.innerValue = newValue
			}
		}
	}
</script>

<style lang="scss" scoped>
	.edit-nickname {
		padding: 0 16px;

		&-text {
			font-size: 14px;
			color: $uni-extra-color;
		}
	}
</style>