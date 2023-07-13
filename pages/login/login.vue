<template>
	<app-authenticate-layout>
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
			<uni-forms-item name="username">
				<uni-easyinput :inputBorder="false" v-model="model.username" placeholder="请输入手机号/用户名" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<uni-easyinput clearable v-model="model.password" type="password" :inputBorder="false"
					placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<view>
			<app-text like-link @click="navigato('/pages/authenticate/register/register')">注册账号</app-text>
			<view style="float: right;">
				<app-text like-link
					@click="navigato('/pages/authenticate/find-password/find-password')">忘记密码？</app-text>
			</view>
		</view>
		<app-gap gap="20px"></app-gap>
		<button :loading="loading" class="login-content-login" :style="{
				backgroundColor: theme
			}" @click="loginHandler">登录</button>
		<app-gap></app-gap>
		<checkbox-group style="display: inline-block;" @change="agreeChangeHandler">
			<label>
				<checkbox :checked="agree" style="transform:scale(0.7)" />
				<text style="font-size: 14px;">同意</text>
			</label>
		</checkbox-group>
		<app-text like-link
			@click="navigato('/pages/personal-center/service-agreement/service-agreement')">用户服务协议</app-text>
		<text style="margin: 0 2px;">和</text>
		<app-text like-link @click="navigato('/pages/personal-center/privacy-policy/privacy-policy')">隐私政策条款</app-text>
		<uni-popup ref="dialog" type="center">
			<uni-popup-dialog confirmText="同意" @confirm="confirmHandler">
				<view>
					<text style="font-size: 14px;">请先阅读并同意</text>
					<app-text like-link
						@click="navigato('/pages/personal-center/service-agreement/service-agreement')">用户服务协议</app-text>
					<text style="margin: 0 2px;">和</text>
					<app-text like-link
						@click="navigato('/pages/personal-center/privacy-policy/privacy-policy')">隐私政策条款</app-text>
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
							errorMessage: '请输入手机号/用户名',
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
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