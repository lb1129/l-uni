<template>
	<view class="app-gap" :style="{height: gap}"></view>
</template>

<script>
	export default {
		name: "app-gap",
		props: {
			gap: {
				// 单位可自行控制 建议px
				type: String,
				default: '16px'
			}
		},
		options: {
			virtualHost: true
		}
	}
</script>

<style lang="scss">
	.app-gap {
		background-color: $uni-bg-color;
	}
</style>