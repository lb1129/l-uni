<template>
	<view class="edit-phone">
		<uni-forms ref="form" :rules="rules" :model="model" :label-width="0">
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
			<app-button @click="confirmHandler">{{$t('confirm')}}</app-button>
		</uni-forms>
	</view>
</template>

<script>
	import {
		setPhoneServe
	} from '@/serves/user.js'
	import {
		sendCodeServe
	} from '@/serves/other.js'
	import {
		isPhone
	} from '@/utils/validate.js'
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				codeTime: 0,
				phoneCode: null,
				model: {
					phone: null,
					code: ''
				},
				rules: {
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
					await setPhoneServe(values)
					this.setUserInfo({
						...this.$userInfo,
						phone: values.phone
					})
					uni.navigateBack()
				} catch (e) {

				}
			},
			...mapActions(['setUserInfo'])
		}
	}
</script>

<style lang="scss" scoped>
	.edit-phone {
		padding: 30px;
	}
</style>