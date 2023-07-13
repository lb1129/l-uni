<template>
	<view class="app-authenticate-layout-header">
		<app-avatar src="/static/image/logo.png" width="75px" height="75px" :custom-style="{
			margin: '45px 0 10px 0'
		}"></app-avatar>
	</view>
	<view class="app-authenticate-layout-content">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "app-authenticate-layout",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.app-authenticate-layout-header {
		text-align: center;
	}

	.app-authenticate-layout-content {
		padding: 0 30px;
	}
</style>