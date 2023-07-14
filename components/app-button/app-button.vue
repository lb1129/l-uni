<template>
	<button :style="innerStyle" :size="size" :type="type" :plain="plain" :disabled="disabled" :loading="loading"
		:formType="formType" :openType="openType" :hoverClass="hoverClass" :hoverStartTime="hoverStartTime"
		:hoverStayTime="hoverStayTime" :appParameter="appParameter" :hoverStopPropagation="hoverStopPropagation"
		:lang="lang" :sessionFrom="sessionFrom" :sendMessageTitle="sendMessageTitle" :sendMessagePath="sendMessagePath"
		:sendMessageImg="sendMessageImg" :showMessageCard="showMessageCard" :groupId="groupId" :guildId="guildId"
		:publicId="publicId" :dataImId="dataImId" :dataImType="dataImType" :dataGoodsId="dataGoodsId"
		:dataOrderId="dataOrderId" :dataBizLine="dataBizLine" @getphonenumber="getphonenumberHandler"
		@getuserinfo="getuserinfoHandler" @error="errorHandler" @opensetting="opensettingHandler"
		@launchapp="launchappHandler" @contact="contactHandler" @chooseavatar="chooseavatarHandler"
		@addgroupapp="addgroupappHandler" @chooseaddress="chooseaddressHandler"
		@chooseinvoicetitle="chooseinvoicetitleHandler" @subscribe="subscribeHandler" @login="loginHandler"
		@im="imHandler" @click="clickHandler">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "app-button",
		emits: ["getphonenumber", "getuserinfo", "error", "opensetting", "launchapp", "contact", "chooseavatar",
			"addgroupapp", "chooseaddress", "chooseinvoicetitle", "subscribe", "login", "im", "click"
		],
		// 微信小程序不支持 $attrs $listeners 无法透传 全部列出
		props: {
			size: {
				type: String,
				default: 'default'
			},
			type: {
				type: String,
				default: 'default'
			},
			plain: Boolean,
			disabled: Boolean,
			loading: Boolean,
			formType: String,
			openType: String,
			hoverClass: {
				type: String,
				default: 'button-hover'
			},
			hoverStartTime: {
				type: Number,
				default: 20
			},
			hoverStayTime: {
				type: Number,
				default: 70
			},
			appParameter: String,
			hoverStopPropagation: Boolean,
			lang: {
				type: String,
				default: 'en'
			},
			sessionFrom: String,
			sendMessageTitle: String,
			sendMessagePath: String,
			sendMessageImg: String,
			showMessageCard: Boolean,
			groupId: String,
			guildId: String,
			publicId: String,
			dataImId: String,
			dataImType: String,
			dataGoodsId: String,
			dataOrderId: String,
			dataBizLine: String,
			customStyle: {
				type: Object,
				default: {}
			}
		},
		options: {
			virtualHost: true
		},
		computed: {
			innerStyle() {
				if (!this.disabled) return {
					backgroundColor: this.$theme,
					color: '#ffffff',
					...this.customStyle
				}
				return this.customStyle
			}
		},
		methods: {
			getphonenumberHandler(e) {
				this.$emit('getphonenumber', e)
			},
			getuserinfoHandler(e) {
				this.$emit('getuserinfo', e)
			},
			errorHandler(e) {
				this.$emit('error', e)
			},
			opensettingHandler(e) {
				this.$emit('opensetting', e)
			},
			launchappHandler(e) {
				this.$emit('launchapp', e)
			},
			contactHandler(e) {
				this.$emit('contact', e)
			},
			chooseavatarHandler(e) {
				this.$emit('chooseavatar', e)
			},
			addgroupappHandler(e) {
				this.$emit('addgroupapp', e)
			},
			chooseaddressHandler(e) {
				this.$emit('chooseaddress', e)
			},
			chooseinvoicetitleHandler(e) {
				this.$emit('chooseinvoicetitle', e)
			},
			subscribeHandler(e) {
				this.$emit('subscribe', e)
			},
			loginHandler(e) {
				this.$emit('login', e)
			},
			imHandler(e) {
				this.$emit('im', e)
			},
			clickHandler(e) {
				this.$emit('click', e)
			}
		}
	}
</script>

<style>

</style>