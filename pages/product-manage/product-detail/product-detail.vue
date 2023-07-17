<template>
	<swiper class="detail-swiper" circular indicator-dots :indicator-color="$theme">
		<swiper-item v-for="img in record.images" :key="img">
			<view class="detail-swiper-item">
				<image mode="aspectFill" class="detail-swiper-item-image" :src="img">
				</image>
			</view>
		</swiper-item>
	</swiper>
	<view class="detail-content">
		<view class="detail-content-item">
			<text class="detail-content-item-label">名称</text>
			<text class="detail-content-item-value">{{record.name}}</text>
		</view>
		<view class="detail-content-item">
			<text class="detail-content-item-label">品牌</text>
			<text class="detail-content-item-value">{{record.brand}}</text>
		</view>
		<view class="detail-content-item">
			<text class="detail-content-item-label">类别</text>
			<text class="detail-content-item-value">{{record.category}}</text>
		</view>
		<view class="detail-content-item">
			<text class="detail-content-item-label">价格</text>
			<text class="detail-content-item-value">{{record.price}}</text>
		</view>
		<view class="detail-content-item">
			<text class="detail-content-item-label">颜色</text>
			<text class="detail-content-item-value">{{record.color}}</text>
		</view>
		<view class="detail-content-item">
			<text class="detail-content-item-label">款式</text>
			<text class="detail-content-item-value">{{record.style}}</text>
		</view>
		<view class="detail-content-item">
			<text class="detail-content-item-label">库存</text>
			<text class="detail-content-item-value">{{record.inventory}}</text>
		</view>
		<view class="detail-content-item">
			<text class="detail-content-item-label">描述</text>
			<text class="detail-content-item-value">{{record.describe}}</text>
		</view>
	</view>
</template>

<script>
	import {
		getProductByIdServe
	} from '@/serves/product.js'
	import config from '@/config.json'
	export default {
		data() {
			return {
				record: {}
			}
		},
		inheritAttrs: false,
		async onLoad(e) {
			this.id = e.id
			if (this.id) {
				try {
					const res = await getProductByIdServe(this.id)
					this.record = res.data
				} catch (e) {}
			}
		},
		// 微信小程序 分享给朋友
		onShareAppMessage(res) {
			return {
				title: this.record.name,
				path: `/pages/product-manage/product-detail/product-detail?id=${this.id}`
			}
		},
		// 微信小程序 分享到微信朋友圈
		onShareTimeline() {
			return {
				title: this.record.name
			}
		},
		// app 原生导航栏点击
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				// NOTE 微信开放平台申请appId 然后使用微信分享
				// NOTE 分享成微信小程序
				// NOTE app 必须与 微信小程序 绑定同一微信开放平台账号
				// uni.share({
				// 	provider: 'weixin',
				// 	scene: "WXSceneSession",
				// 	type: 5,
				// 	imageUrl: this.record.images[0],
				// 	title: this.record.name,
				// 	miniProgram: {
				// 		id: 'gh_6877f5cad59a',
				// 		path: `pages/product-manage/product-detail/product-detail?id=${this.id}`,
				// 		type: 0,
				// 		webUrl: `${config.h5_website}/#/pages/product-manage/product-detail/product-detail?id=${this.id}`
				// 	},
				// 	success: (res) => {
				// 		uni.showToast({
				// 			icon: 'none',
				// 			title: this.$t('shareSuccess')
				// 		})
				// 	},
				// 	fail: (err) => {
				// 		uni.showToast({
				// 			icon: 'none',
				// 			title: this.$t('shareFail')
				// 		})
				// 	}
				// })
				// 分享成图文
				if (process.env.NODE_ENV === 'development')
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 0,
						href: `${config.h5_website}/#/pages/product-manage/product-detail/product-detail?id=${this.id}`,
						title: this.record.name,
						summary: this.record.desc,
						imageUrl: this.record.images[0],
						success: (res) => {
							uni.showToast({
								icon: 'none',
								title: this.$t('shareSuccess')
							})
						},
						fail: (err) => {
							uni.showToast({
								icon: 'none',
								title: this.$t('shareFail')
							})
						}
					})
				// 系统分享
				if (process.env.NODE_ENV === 'production')
					uni.shareWithSystem({
						summary: '',
						href: `${config.h5_website}/#/pages/product-manage/product-detail/product-detail?id=${this.id}`,
						success: () => {
							uni.showToast({
								icon: 'none',
								title: this.$t('shareSuccess')
							})
						},
						fail: () => {
							uni.showToast({
								icon: 'none',
								title: this.$t('shareFail')
							})
						}
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail-swiper {
		height: 200px;

		&-item {
			display: block;
			height: 200px;
			line-height: 200px;
			text-align: center;

			&-image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.detail-content {
		padding: 8px 16px;

		&-item {
			padding: 8px 0;

			&-label {
				font-size: 16px;
				font-weight: 700;

				&::after {
					content: ':';
					margin-left: 2px;
					margin-right: 4px;
				}
			}

			&-value {
				font-size: 14px;
			}
		}
	}
</style>