<template>
	<image class="app-avatar" mode="scaleToFill" :src="src" :style="{
		width: width,
		height: height,
		...customStyle
	}"></image>
</template>

<script>
	export default {
		name: "app-avatar",
		props: {
			// TODO 支持图标 形状
			src: String,
			width: {
				type: String,
				default: '40px'
			},
			height: {
				type: String,
				default: '40px'
			},
			customStyle: Object
		}
	}
</script>

<style lang="scss" scoped>
	.app-avatar {
		border-radius: 50%;
	}
</style>