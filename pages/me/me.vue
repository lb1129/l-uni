<template>
	<view class="me-header">
		<app-avatar src="/static/image/user.png" width="75px" height="75px" :custom-style="{
			margin: '45px 0 10px 0'
		}"></app-avatar>
		<view>
			<text>viho</text>
		</view>
	</view>
	<uni-list>
		<uni-list-item title="个人资料" link to="/pages/personal-center/info/info" />
		<uni-list-item title="设置" link to="/pages/personal-center/setting/setting" />
		<uni-list-item title="隐私政策" link to="/pages/personal-center/privacy-policy/privacy-policy" />
		<uni-list-item title="关于我们" link to="/pages/personal-center/about-us/about-us" />
		<uni-list-item title="退出登录" link to="/pages/authenticate/login/login" />
	</uni-list>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.me-header {
		height: 185px;
		text-align: center;
	}
</style>