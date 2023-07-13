<template>
	<view class="app-icon-text" :style="customStyle" @click="clickHandler">
		<uni-icons :type="iconType" :color="iconColor" :custom-prefix="customPrefix" :size="iconSize"></uni-icons>
		<view class="app-icon-text-text">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "app-icon-text",
		emits: ['click'],
		props: {
			iconType: String,
			iconSize: {
				type: Number,
				default: 30
			},
			iconColor: String,
			customPrefix: String,
			text: String,
			customStyle: Object
		},
		options: {
			virtualHost: true
		},
		methods: {
			clickHandler(e) {
				this.$emit('click', e)
			}
		}
	}
</script>

<style lang="scss">
	.app-icon-text {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&-text {
			min-height: 38rpx;
		}
	}
</style>