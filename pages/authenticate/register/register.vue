<template>
	<app-authenticate-layout>
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
			<uni-forms-item name="username">
				<uni-easyinput :inputBorder="false" v-model="model.username" placeholder="用户名" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<uni-easyinput clearable v-model="model.password" type="password" :inputBorder="false"
					placeholder="密码" />
			</uni-forms-item>
			<uni-forms-item name="confirmPassword">
				<uni-easyinput clearable v-model="model.confirmPassword" type="password" :inputBorder="false"
					placeholder="确认密码" />
			</uni-forms-item>
			<uni-forms-item name="phone">
				<uni-easyinput type="number" maxlength="11" v-model="model.phone" :inputBorder="false"
					placeholder="手机号" />
			</uni-forms-item>
			<uni-row :gutter="16">
				<uni-col :span="13">
					<uni-forms-item name="code">
						<uni-easyinput v-model="model.code" :inputBorder="false" placeholder="验证码" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="11">
					<button :disabled="codeTime > 0" style="font-size: 14px;"
						@click="getCodeHandler">{{codeText}}</button>
				</uni-col>
			</uni-row>
			<app-text like-link @click="clickHandler">使用已有账号登录</app-text>
			<app-gap gap="20px"></app-gap>
			<button :style="{
				color: '#fff',
				backgroundColor: theme
			}" @click="registerHandler" :loading="loading">注册</button>
		</uni-forms>
		<app-gap></app-gap>
	</app-authenticate-layout>
</template>

<script>
	export default {
		data() {
			return {
				theme: '#007aff',
				loading: false,
				codeTime: 0,
				model: {
					username: '',
					password: '',
					confirmPassword: '',
					phone: null,
					code: ''
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
					},
					confirmPassword: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
						}, {
							validateFunction: function(rule, value, data, callback) {
								if (!value || data.password === value) {
									callback()
								} else {
									callback('两次密码输入不一致')
								}
							}
						}]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '请输入手机号',
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: '请输入验证码',
						}]
					}
				}
			}
		},
		computed: {
			codeText() {
				return this.codeTime > 0 ? `重新获取${this.codeTime}s` : '获取验证码'
			}
		},
		methods: {
			clickHandler() {
				uni.navigateTo({
					url: '/pages/authenticate/login/login'
				})
			},
			async getCodeHandler() {
				try {
					const values = await this.$refs.form.validateField('phone')
					// TODO get code by api
					// 
					this.codeTime = 20
					this.timer = setInterval(() => {
						if (this.codeTime <= 0)
							clearInterval(this.timer)
						else
							this.codeTime--
					}, 1000)
				} catch (e) {

				}
			},
			async registerHandler() {
				this.loading = true
				try {
					const values = await this.$refs.form.validate()
					// TODO register by api 
					// success navigate to login
					setTimeout(() => {
						this.loading = false
					}, 500)
				} catch (e) {
					this.loading = false
				}
			}
		}
	}
</script>

<style>

</style>