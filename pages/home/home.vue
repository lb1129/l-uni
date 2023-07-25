<template>
	<template v-for="menu in menuData" :key="menu.path">
		<uni-section :title="menu.name" padding>
			<template v-slot:decoration>
				<view class="home-decoration" :style="{
					backgroundColor: $theme
				}"></view>
			</template>
			<uni-grid :column="4">
				<uni-grid-item v-for="child in menu.children" :key="child.name">
					<app-icon-text :icon-type="child.icon"
						@click="clickHandler(`${menu.path}${child.path}`)">{{child.name}}</app-icon-text>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<app-gap></app-gap>
	</template>
	<template v-if="menuData && menuData.length ? false : true">
		<app-gap gap="32px"></app-gap>
		<app-empty></app-empty>
	</template>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		getMenuServe
	} from '@/serves/menu.js'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState(['menuData'])
		},
		methods: {
			clickHandler(url) {
				uni.navigateTo({
					url
				})
			},
			...mapActions(['setMenuData'])
		},
		// 页面级别的下拉刷新
		onPullDownRefresh() {
			getMenuServe().then((res) => {
				this.setMenuData(res.data)
				uni.stopPullDownRefresh()
			}).catch(err => {
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss" scoped>
	.home-decoration {
		width: 4px;
		height: 12px;
		border-radius: 10px;
		margin-right: 6px;
	}
</style>