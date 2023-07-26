<template>
	<uni-list>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item, index) in dataSource" :key="item._id" :right-options="options"
				@click="actionItemClickHandler($event, item, index)">
				<uni-list-item clickable @click="itemClickHandler(item, index)" :title="item.title"
					:note="item.content">
					<template v-slot:footer v-if="!item.read">
						<view class="message-right">
							<view class="message-right-dot" :style="{backgroundColor: $theme}"></view>
						</view>
					</template>
				</uni-list-item>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</uni-list>
	<uni-load-more id="loadMore" :color="$theme" :status="status" />
</template>

<script>
	import {
		getMessagesServe,
		setMessageReadServe,
		deleteMessageIdsServe
	} from '@/serves/message.js'
	export default {
		data() {
			return {
				loading: false,
				dataSource: [],
				total: 0
			}
		},
		onShow() {
			uni.hideTabBarRedDot({
				index: 1
			})
		},
		computed: {
			options() {
				return [{
					text: this.$t('delete'),
					style: {
						backgroundColor: this.$theme
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
					uni.showModal({
						title: this.$t('tip'),
						content: this.$t('areYouSureDelete'),
						cancelText: this.$t('cancel'),
						confirmText: this.$t('confirm'),
						success: async (res) => {
							if (res.confirm) {
								try {
									await deleteMessageIdsServe([record._id])
									this.dataSource.splice(index, 1)
										--this.total
									// 删除后 如果还有更多且已到底 则触发加载
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
			},
			async itemClickHandler(record, index) {
				if (!record.read) {
					await setMessageReadServe([record._id])
					record.read = true
					this.dataSource.splice(index, 1, {
						...record
					})
				}
			},
			async loadData() {
				this.loading = true
				try {
					const res = await getMessagesServe({
						pageSize: this.pageSize,
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
			const listItemHeight = 62
			const pageSize = Math.ceil(windowHeight / listItemHeight) + 1
			this.pageSize = pageSize
			this.loadData()
		}
	}
</script>

<style lang="scss" scoped>
	.message-right {
		display: flex;
		align-items: center;

		&-dot {
			width: 12px;
			height: 12px;
			border-radius: 50%;
		}
	}
</style>