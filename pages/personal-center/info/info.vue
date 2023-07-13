<template>
	<uni-list>
		<uni-list-item showArrow>
			<template v-slot:header>
				<view class="info-avatart-text">
					<text style="font-size: 14px;">{{$t('avatar')}}</text>
				</view>
			</template>
			<template v-slot:footer>
				<app-avatar src="/static/image/user.png" width="40px" height="40px"></app-avatar>
			</template>
		</uni-list-item>
		<uni-list-item :title="$t('nickname')" showArrow right-text="viho">
		</uni-list-item>
	</uni-list>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.info-avatart-text {
		display: flex;
		align-items: center;
	}
</style>