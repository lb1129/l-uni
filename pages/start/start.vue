<template>
	<view class="start" :style="{
		backgroundColor: $theme
	}">
		<app-avatar src="/static/image/logo-white.png" width="150px" height="150px" :custom-style="{
		margin: '100px 0 10px 0'
	}"></app-avatar>
		<view class="start-title"><text>L-UNI</text></view>
		<view class="start-loading"><text>{{$t('systemStartupInProgress')}}</text></view>
	</view>
</template>

<script>
	import isAuthenticated from '@/interceptor/router/isAuthenticated.js'
	export default {
		// 启动页控制是否已登录跳转
		async onLoad() {
			// 延迟 1000ms 再跳转（防止太快闪烁）
			const delay = 1000
			const now = Date.now()
			try {
				await isAuthenticated.value
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/home/home'
					})
				}, delay - (Date.now() - now))
			} catch (e) {
				setTimeout(() => {
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}, delay - (Date.now() - now))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.start {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: center;

		&-title {
			color: #ffffff;
			font-size: 20px;
			margin-bottom: 20px;
		}

		&-loading {
			position: absolute;
			bottom: 80px;
			left: 0;
			right: 0;
			width: 100%;
			color: #ffffff;
		}
	}
</style>