<template>
	<app-authenticate-layout>
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
			<uni-forms-item name="username">
				<uni-easyinput :primaryColor="$theme" :inputBorder="false" v-model="model.username"
					:placeholder="$t('PhoneOrUserName')" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<uni-easyinput :primaryColor="$theme" v-model="model.password" type="password" :inputBorder="false"
					:placeholder="$t('password')" />
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
		<app-button @click="loginHandler">{{$t('login')}}</app-button>
		<app-gap></app-gap>
		<view>
			<checkbox-group style="display: inline-block; margin-right: 2px;" @change="agreeChangeHandler">
				<label>
					<checkbox :color="$theme" :checked="agree" style="transform:scale(0.7)" />
					<text style="font-size: 14px;">{{$t('pleaseReadAndAgree')}}</text>
				</label>
			</checkbox-group>
			<app-text like-link
				@click="navigato('/pages/personal-center/privacy-policy/privacy-policy')">{{$t('privacyPolicy')}}</app-text>
		</view>
		<app-gap></app-gap>
		<uni-popup ref="dialog" type="center">
			<uni-popup-dialog @confirm="confirmHandler">
				<view style="font-size: 14px;">
					<text style="margin-right: 2px;">{{$t('pleaseReadAndAgree')}}</text>
					<app-text like-link
						@click="navigato('/pages/personal-center/privacy-policy/privacy-policy')">{{$t('privacyPolicy')}}</app-text>
				</view>
			</uni-popup-dialog>
		</uni-popup>
		<!-- #ifdef MP-WEIXIN -->
		<view class="login-weixin">
			<uni-icons type="weixin" :color="$theme" :size="40" @click="weixinLoginHandler"></uni-icons>
		</view>
		<!-- #endif -->
	</app-authenticate-layout>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import {
		loginServe,
		loginByWxServe
	} from '@/serves/auth.js'
	import {
		getUserInfoServe,
		setPushClientIdServe
	} from '@/serves/user.js'
	import {
		getMenuServe
	} from '@/serves/menu.js'
	import {
		tokenStorage
	} from '@/storage/index.js'
	export default {
		data() {
			return {
				agree: false,
				model: {
					username: '',
					password: ''
				},
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: this.$t('pleaseEnterPhoneOrUserName')
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
			// #ifdef APP-PLUS | MP-WEIXIN
			weixinLoginHandler() {
				// 微信小程序 微信登录
				// NOTE app 微信开放平台申请appId 然后使用微信登录
				let isMpWeixin = false
				// #ifdef MP-WEIXIN
				isMpWeixin = true
				// #endif
				if (process.env.NODE_ENV === 'development' || isMpWeixin)
					uni.login({
						provider: 'weixin',
						onlyAuthorize: true,
						success: (event) => {
							const {
								code
							} = event
							// TODO 获取的时匿名昵称和头像 建议使用微信小程序头像昵称填写能力
							uni.getUserInfo({
								provider: 'weixin',
								success: async (e) => {
									const res = await loginByWxServe({
										userInfo: e.userInfo,
										code
									})
									this.loginSuccessAfterHandler(res.data)
								}
							})
						}
					})
				else uni.showToast({
					icon: 'none',
					title: this.$t('noAppId')
				})
			},
			// #endif
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
					await this.$refs.form.validate()
					if (!this.agree) {
						this.$refs.dialog.open()
						return
					}
					this.login()
				} catch (e) {}
			},
			loginSuccessAfterHandler(token) {
				tokenStorage.set(token)
				// 更新客户端推送标识
				uni.getPushClientId({
					success: (res) => {
						setPushClientIdServe(res.cid)
					}
				})
				getUserInfoServe().then(res => {
					this.setUserInfo(res.data)
				})
				getMenuServe().then(res => {
					this.setMenuData(res.data)
				})
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			login() {
				loginServe(this.model).then(res => {
					this.loginSuccessAfterHandler(res.data)
				})
			},
			...mapActions(['setUserInfo', 'setMenuData'])
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef APP-PLUS | MP-WEIXIN */
	.login-weixin {
		position: fixed;
		bottom: 16px;
		left: 0;
		right: 0;
		width: 100%;
		text-align: center;
	}

	/* #endif */
</style>