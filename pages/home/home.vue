<template>
	<template v-for="menu in menuData" :key="menu.name">
		<uni-section :title="menu.name" type="line" padding>
			<uni-grid :column="4">
				<uni-grid-item v-for="child in menu.children" :key="child.name">
					<app-icon-text :icon-type="child.icon"
						@click="clickHandler(child.path)">{{child.name}}</app-icon-text>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<app-gap></app-gap>
	</template>
</template>

<script>
	import userMenuData from '@/mock/userMenuData.json'
	export default {
		data() {
			return {
				menuData: userMenuData.viho
			}
		},
		onLoad() {

		},
		methods: {
			clickHandler(url) {
				uni.navigateTo({
					url
				})
			}
		},
		// 页面级别的下拉刷新
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		}
	}
</script>

<style lang="scss">

</style>