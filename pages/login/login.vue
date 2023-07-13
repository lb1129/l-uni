<template>
	<app-authenticate-layout>
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
			<uni-forms-item name="username">
				<uni-easyinput :inputBorder="false" v-model="model.username"
					:placeholder="$t('pleaseEnterPhoneOrAccount')" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<uni-easyinput clearable v-model="model.password" type="password" :inputBorder="false"
					:placeholder="$t('pleaseEnterPassword')" />
			</uni-forms-item>
		</uni-forms>
		<view>
			<app-text like-link @click="navigato('/pages/authenticate/register/register')">{{$t('signUp')}}</app-text>
			<view style="float: right;">
				<app-text like-link
					@click="navigato('/pages/authenticate/find-password/find-password')">{{$t('forgotPassword')}}</app-text>
			</view>
		</view>
		<app-gap gap="20px"></app-gap>
		<button :loading="loading" class="login-content-login" :style="{
				backgroundColor: theme
			}" @click="loginHandler">{{$t('login')}}</button>
		<app-gap></app-gap>
		<checkbox-group style="display: inline-block; margin-right: 2px;" @change="agreeChangeHandler">
			<label>
				<checkbox :checked="agree" style="transform:scale(0.7)" />
				<text style="font-size: 14px;">{{$t('agree')}}</text>
			</label>
		</checkbox-group>
		<app-text like-link
			@click="navigato('/pages/personal-center/service-agreement/service-agreement')">{{$t('serviceAgreement')}}</app-text>
		<text style="margin: 0 2px; font-size: 14px;">{{$t('and')}}</text>
		<app-text like-link
			@click="navigato('/pages/personal-center/privacy-policy/privacy-policy')">{{$t('privacyPolicy')}}</app-text>
		<uni-popup ref="dialog" type="center">
			<uni-popup-dialog :confirmText="$t('agree')" @confirm="confirmHandler">
				<view style="font-size: 14px;">
					<text>{{$t('pleaseReadAndAgree')}}</text>
					<app-text like-link
						@click="navigato('/pages/personal-center/service-agreement/service-agreement')">{{$t('serviceAgreement')}}</app-text>
					<text style="margin: 0 2px;">{{$t('and')}}</text>
					<app-text like-link
						@click="navigato('/pages/personal-center/privacy-policy/privacy-policy')">{{$t('privacyPolicy')}}</app-text>
				</view>
			</uni-popup-dialog>
		</uni-popup>
		<app-gap></app-gap>
	</app-authenticate-layout>
</template>

<script>
	export default {
		data() {
			return {
				theme: '#007aff',
				loading: false,
				agree: false,
				model: {
					username: '',
					password: ''
				},
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: this.$t('pleaseEnterPhoneOrAccount')
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: this.$t('pleaseEnterPassword'),
						}]
					}
				}
			}
		},
		methods: {
			navigato(url) {
				uni.navigateTo({
					url
				})
			},
			agreeChangeHandler(e) {
				this.agree = !this.agree
			},
			confirmHandler() {
				this.agree = true
				this.login()
			},
			async loginHandler() {
				try {
					const values = await this.$refs.form.validate()
					if (!this.agree) {
						this.$refs.dialog.open()
						return
					}
					this.login()
				} catch (e) {}
			},
			login() {
				this.loading = true
				// TODO login by api
				// success get userinfo and menuData
				// navigate to home page
				setTimeout(() => {
					// this.model
					uni.switchTab({
						url: '/pages/index/index'
					})
					this.loading = false
				}, 500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-content-login {
		color: #ffffff;
	}
</style>