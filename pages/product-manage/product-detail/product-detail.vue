<template>
	<swiper class="detail-swiper" circular indicator-dots :indicator-color="$theme">
		<swiper-item>
			<view class="detail-swiper-item">
				<image mode="aspectFill" class="detail-swiper-item-image" src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/141480/8/14039/48663/5fab0686E7d32b85f/bb2489ac5d2b4ed5.jpg"></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="detail-swiper-item">
				<image mode="aspectFill" class="detail-swiper-item-image" src="https://img13.360buyimg.com/n1/s450x450_jfs/t1/199961/6/36523/18216/647ef573F5cd51081/05b06c8d982c2162.jpg"></image>
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
	export default {
		data() {
			return {
				record: {}
			}
		},
		inheritAttrs: false,
		async onLoad(e) {
			const id = e.id
			if (id) {
				try {
					const res = await getProductByIdServe(id)
					this.record = res.data
				} catch (e) {}
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