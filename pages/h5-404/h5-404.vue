<template>
	<view class="page-not-found">
		<text class="page-not-found-text">{{$t('pageNotFound')}}</text>
		<app-gap></app-gap>
		<app-button @click="goBackHandler">{{$t('back')}}</app-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goBackHandler() {
				this.$router.back()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-not-found {
		padding: 150px 16px 0;
		text-align: center;

		&-text {
			font-size: 16px;
		}
	}
</style>