<template>
	<view class="about-us-text">
		<text>关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容 关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容
			关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容 关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容关于我们内容</text>
		<uni-title type="h2" title="观看视频了解我们"></uni-title>
		<view v-if="showVideo">
			<video class="about-us-video" id="video"
				src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" @error="videoErrorCallback"
				controls poster="https://web-assets.dcloud.net.cn/unidoc/zh/poster.png"></video>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showVideo: false
			}
		},
		onReady() {
			// #ifndef MP-ALIPAY || MP-TOUTIAO
			this.videoContext = uni.createVideoContext('video')
			// #endif
			// #ifdef APP-PLUS || MP-BAIDU
			setTimeout(() => {
				this.showVideo = true
			}, 350)
			// #endif
			// #ifndef APP-PLUS || MP-BAIDU
			this.showVideo = true
			// #endif
		},
		methods: {
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.about-us-text {
		font-size: 16px;
		padding: 16px;
	}

	.about-us-video {
		width: 100%;
		height: 300px;
	}
</style>