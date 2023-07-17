<template>
	<view class="app-empty">
		<uni-icons custom-prefix="iconfont" type="icon-empty" size="40" color="#dddddd"></uni-icons>
		<view class="app-empty-text">
			<text>{{this.$t('noData')}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "app-empty"
	}
</script>

<style lang="scss">
	.app-empty {
		text-align: center;

		&-text {
			font-size: 14px;
			color: #dddddd;
			margin-top: 16px;
		}
	}
</style>