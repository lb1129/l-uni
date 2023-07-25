<template>
	<app-authenticate-layout>
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
			<uni-forms-item name="password">
				<uni-easyinput :primaryColor="$theme" v-model="model.password" type="password" :inputBorder="false"
					:placeholder="$t('newPassword')" />
			</uni-forms-item>
			<uni-forms-item name="confirmPassword">
				<uni-easyinput :primaryColor="$theme" v-model="model.confirmPassword" type="password"
					:inputBorder="false" :placeholder="$t('confirmPassword')" />
			</uni-forms-item>
			<uni-forms-item name="phone">
				<uni-easyinput :primaryColor="$theme" type="number" maxlength="11" v-model="model.phone"
					:inputBorder="false" :placeholder="$t('mobileNumber')" />
			</uni-forms-item>
			<uni-row :gutter="16">
				<uni-col :span="13">
					<uni-forms-item name="code">
						<uni-easyinput :primaryColor="$theme" v-model="model.code" :inputBorder="false"
							:placeholder="$t('verificationCode')" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="11">
					<app-button :disabled="codeTime > 0" :custom-style="{fontSize: '14px'}"
						@click="getCodeHandler">{{codeText}}</app-button>
				</uni-col>
			</uni-row>
			<view v-if="phoneCode">
				<app-text>{{phoneCode}}</app-text>
				<app-gap gap="20px"></app-gap>
			</view>
			<app-text like-link @click="clickHandler">{{$t('haveAnAccount')}}</app-text>
			<app-gap gap="20px"></app-gap>
			<app-button @click="confirmHandler">{{$t('confirm')}}</app-button>
		</uni-forms>
		<app-gap></app-gap>
	</app-authenticate-layout>
</template>

<script>
	import {
		findPasswordServe
	} from '@/serves/auth.js'
	import {
		sendCodeServe
	} from '@/serves/other.js'
	import {
		isPhone,
		isPassword
	} from '@/utils/validate.js'
	export default {
		data() {
			return {
				codeTime: 0,
				phoneCode: null,
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
						}, {
							validateFunction: (rule, value, data, callback) => {
								if (value && !isPassword(value)) {
									callback(this.$t('passwordRule'))
								} else {
									callback()
								}
							}
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
						}, {
							validateFunction: (rule, value, data, callback) => {
								if (value && !isPhone(value)) {
									callback(this.$t('phoneRule'))
								} else {
									callback()
								}
							}
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
					const res = await sendCodeServe(values.phone)
					// TODO 短信服务暂未接入运营商 先直接显示在前端
					this.phoneCode = res.data
					this.codeTime = 60
					this.timer = setInterval(() => {
						if (this.codeTime <= 0) {
							this.phoneCode = null
							clearInterval(this.timer)
						} else
							this.codeTime--
					}, 1000)
				} catch (e) {

				}
			},
			async confirmHandler() {
				try {
					const values = await this.$refs.form.validate()
					await findPasswordServe(values)
					uni.showToast({
						icon: 'none',
						title: this.$t('findPasswordSuccess'),
						duration: 800
					})
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}, 800)
				} catch (e) {

				}
			}
		}
	}
</script>

<style>

</style>