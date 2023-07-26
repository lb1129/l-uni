<template>
	<uni-search-bar :placeholder="$t('searchByName')" :cancelText="$t('cancel')" @confirm="searchHandler"
		@clear="searchClearHandler" @cancel="searchClearHandler" clearButton="none">
	</uni-search-bar>
	<uni-list>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item, index) in dataSource" :key="item._id" :right-options="options"
				@click="actionItemClickHandler($event, item, index)">
				<uni-list-chat clickable @click="itemClickHandler(item)" :avatar-circle="true" :title="item.name"
					:avatar="item.images[0]" :note="item.brand" :time="`￥${item.price}`"></uni-list-chat>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</uni-list>
	<uni-load-more id="loadMore" :color="$theme" :status="status" />
</template>

<script>
	import {
		getProductsServe,
		deleteProductByIdsServe
	} from '@/serves/product.js'
	import qs from 'query-string'
	import {
		operateAuthMixin
	} from '@/auth/operateAuth.js'
	export default {
		// 操作权限
		mixins: [operateAuthMixin],
		data() {
			return {
				loading: false,
				dataSource: [],
				total: 0
			}
		},
		computed: {
			options() {
				return [{
					text: this.$t('delete'),
					style: {
						color: this.$canDelete ? '#ffffff' : 'rgb(0 0 0 / 30%)',
						backgroundColor: this.$canDelete ? this.$theme : '#f7f7f7'
					}
				}]
			},
			status() {
				if (this.loading) return 'loading'
				if (this.total <= this.dataSource.length) return 'no-more'
				return 'more'
			}
		},
		methods: {
			actionItemClickHandler(e, record, index) {
				// 删除
				if (e.index === 0) {
					if (this.$canDelete) {
						uni.showModal({
							title: this.$t('tip'),
							content: this.$t('areYouSureDelete'),
							cancelText: this.$t('cancel'),
							confirmText: this.$t('confirm'),
							success: async (res) => {
								if (res.confirm) {
									try {
										await deleteProductByIdsServe([record._id])
										this.dataSource.splice(index, 1)
											--this.total
										if (this.status === 'more') {
											const query = uni.createSelectorQuery().in(this);
											query.select('#loadMore').boundingClientRect(({
												top
											}) => {
												const {
													windowHeight,
													windowTop
												} = uni.getWindowInfo()
												if (top - windowHeight - windowTop <= 50) {
													this.loadData()
												}
											}).exec();
										}

									} catch (e) {}
								}
							}
						})
					}
				}
			},
			itemClickHandler(record) {
				if (this.$canDetail) {
					uni.navigateTo({
						url: qs.stringifyUrl({
							url: '/pages/product-manage/product-detail/product-detail',
							query: {
								id: record._id
							}
						})
					})
				}

			},
			searchClearHandler() {
				if (this.keyword) {
					this.keyword = ''
					this.dataSource = []
					this.loadData()
				}
			},
			searchHandler(e) {
				const value = e.value
				if (this.keyword !== value) {
					this.keyword = value
					this.dataSource = []
					this.loadData()
				}
			},
			async loadData() {
				this.loading = true
				try {
					const res = await getProductsServe({
						pageSize: this.pageSize,
						keyword: this.keyword,
						createDate: this.dataSource.length ? this.dataSource[this.dataSource.length - 1]
							.create_date : null
					})
					this.dataSource = [...this.dataSource, ...res.data.data]
					this.total = res.data.total
					this.loading = false
				} catch (error) {
					this.loading = false
				}
			}
		},
		onPullDownRefresh() {
			this.dataSource = []
			this.loadData().finally(() => {
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() {
			if (this.status === 'more') {
				this.loadData()
			}
		},
		onReady() {
			// 根据屏幕高度 计算一页需要多少条才能触发加载更多
			const {
				windowHeight
			} = uni.getWindowInfo()
			const searchBarHeight = 56
			const listItemHeight = 67
			const pageSize = Math.ceil((windowHeight - searchBarHeight) / listItemHeight) + 1
			this.pageSize = pageSize
			this.loadData()
		}
	}
</script>

<style>

</style>