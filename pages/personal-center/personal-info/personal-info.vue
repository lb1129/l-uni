<template>
	<uni-list>
		<uni-list-item showArrow clickable @click="changeAvatarHandler">
			<template v-slot:header>
				<view class="info-avatart-text">
					<text style="font-size: 14px;">{{$t('avatar')}}</text>
				</view>
			</template>
			<template v-slot:footer>
				<app-avatar :src="avatarUrl" width="40px" height="40px"></app-avatar>
			</template>
		</uni-list-item>
		<uni-list-item :title="$t('userName')" to="/pages/personal-center/edit-user-name/edit-user-name" showArrow
			:right-text="$userInfo.userName">
		</uni-list-item>
	</uni-list>
</template>

<script>
	import permision from "@/common/permission.js"
	export default {
		data() {
			return {
				avatarUrl: '/static/image/user.png'
			}
		},
		methods: {
			async changeAvatarHandler() {
				uni.chooseImage({
					count: 1,
					sourceType: ['camera', 'album'],
					sizeType: ['compressed', 'original'],
					success: (res) => {
						// TODO call upload api
						// uni.uploadFile({
						// 	url: '',
						// 	filePath: res.tempFilePaths[0],
						// 	name: 'file',
						// 	success: (uploadFileRes) => {
						// 		// this.avatarUrl = uploadFileRes.data.data
						// 	}
						// })
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info-avatart-text {
		display: flex;
		align-items: center;
	}
</style>