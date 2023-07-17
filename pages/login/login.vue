<template>
	<app-authenticate-layout>
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
			<uni-forms-item name="userName">
				<uni-easyinput :primaryColor="$theme" :inputBorder="false" v-model="model.userName"
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
		<!-- #ifdef APP-PLUS | MP-WEIXIN -->
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
	} from '@/serves/login.js'
	import {
		getMenuServe,
		getUserInfoServe
	} from '@/serves/user.js'
	import {
		tokenStorage
	} from '@/storage/index.js'
	import isAuthenticated from '@/auth/isAuthenticated.js'
	export default {
		data() {
			return {
				agree: false,
				model: {
					userName: '',
					password: ''
				},
				rules: {
					userName: {
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
			weixinLoginHandler() {
				// 微信小程序 微信登录
				// NOTE app 微信开放平台申请appId 然后使用微信登录
				if (process.env.NODE_ENV === 'development')
					uni.login({
						provider: 'weixin',
						onlyAuthorize: true,
						success: (event) => {
							const {
								code
							} = event
							//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求
							loginByWxServe({
								code
							}).then(res => {
								this.loginSuccessAfterHandler(res.data)
							})
						}
					})
				else uni.showToast({
					icon: 'none',
					title: this.$t('noAppId')
				})
			},
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
				getUserInfoServe().then(res => {
					this.setUserInfo(res.data)
				})
				getMenuServe().then(res => {
					this.setMenuData(res.data)
				})
				uni.switchTab({
					url: '/pages/home/home'
				}).then(() => {
					uni.setNavigationBarColor({
						frontColor: '#ffffff',
						backgroundColor: this.$theme
					})
				})
			},
			login() {
				loginServe(this.model).then(res => {
					this.loginSuccessAfterHandler(res.data)
				})
			},
			...mapActions(['setUserInfo', 'setMenuData'])
		},
		onLoad() {
			// 已登录 跳转首页
			isAuthenticated.value.then(() => {
				uni.switchTab({
					url: '/pages/home/home'
				}).then(() => {
					uni.setNavigationBarColor({
						frontColor: '#ffffff',
						backgroundColor: this.$theme
					})
				})
			})
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