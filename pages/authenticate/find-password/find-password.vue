<template>
	<app-authenticate-layout>
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
			<uni-forms-item name="password">
				<uni-easyinput clearable v-model="model.password" type="password" :inputBorder="false"
					:placeholder="$t('newPassword')" />
			</uni-forms-item>
			<uni-forms-item name="confirmPassword">
				<uni-easyinput clearable v-model="model.confirmPassword" type="password" :inputBorder="false"
					:placeholder="$t('confirmPassword')" />
			</uni-forms-item>
			<uni-forms-item name="phone">
				<uni-easyinput type="number" maxlength="11" v-model="model.phone" :inputBorder="false"
					:placeholder="$t('mobileNumber')" />
			</uni-forms-item>
			<uni-row :gutter="16">
				<uni-col :span="13">
					<uni-forms-item name="code">
						<uni-easyinput v-model="model.code" :inputBorder="false"
							:placeholder="$t('verificationCode')" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="11">
					<button :disabled="codeTime > 0" style="font-size: 14px;"
						@click="getCodeHandler">{{codeText}}</button>
				</uni-col>
			</uni-row>
			<app-text like-link @click="clickHandler">{{$t('haveAnAccount')}}</app-text>
			<app-gap gap="20px"></app-gap>
			<button :style="{
				color: '#fff',
				backgroundColor: theme
			}" @click="confirmHandler" :loading="loading">{{$t('confirm')}}</button>
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
					password: '',
					confirmPassword: '',
					phone: null,
					code: ''
				},
				rules: {
					password: {
						rules: [{
							required: true,
							errorMessage: this.$t('pleaseEnterPassword'),
						}]
					},
					confirmPassword: {
						rules: [{
							required: true,
							errorMessage: this.$t('pleaseEnterPassword'),
						}, {
							validateFunction: (rule, value, data, callback) => {
								if (!value || data.password === value) {
									callback()
								} else {
									callback(this.$t('twoPasswordsDoNotMatch'))
								}
							}
						}]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: this.$t('pleaseEnterMobileNumber'),
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: this.$t('pleaseEnterVerificationCode'),
						}]
					}
				}
			}
		},
		computed: {
			codeText() {
				return this.codeTime > 0 ? `${this.$t('retrieve')} ${this.codeTime}s` : this.$t('getVerificationCode')
			}
		},
		methods: {
			clickHandler() {
				uni.navigateBack()
			},
			async getCodeHandler() {
				try {
					const values = await this.$refs.form.validateField('phone')
					// TODO get code by api
					// start timer
					this.codeTime = 60
					this.timer = setInterval(() => {
						if (this.codeTime <= 0)
							clearInterval(this.timer)
						else
							this.codeTime--
					}, 1000)
				} catch (e) {

				}
			},
			async confirmHandler() {
				this.loading = true
				try {
					const values = await this.$refs.form.validate()
					// TODO find password by api 
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