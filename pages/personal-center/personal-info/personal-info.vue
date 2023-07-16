<template>
	<uni-list>
		<uni-list-item showArrow clickable @click="changeAvatarHandler">
			<template v-slot:header>
				<view class="info-avatart-text">
					<text style="font-size: 14px;">{{$t('avatar')}}</text>
				</view>
			</template>
			<template v-slot:footer>
				<app-avatar :src="$userInfo.avatar" width="40px" height="40px"></app-avatar>
			</template>
		</uni-list-item>
		<uni-list-item :title="$t('userName')" to="/pages/personal-center/edit-user-name/edit-user-name" showArrow
			:right-text="$userInfo.userName">
		</uni-list-item>
	</uni-list>
</template>

<script>
	import {
		editUserInfoServe
	} from '@/serves/user.js'
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		methods: {
			...mapActions(['setUserInfo']),
			changeAvatarHandler() {
				uni.chooseImage({
					count: 1,
					sourceType: ['camera', 'album'],
					sizeType: ['compressed', 'original'],
					success: (res) => {
						// mock serve
						// #ifdef H5
						const render = new FileReader()
						render.readAsDataURL(res.tempFiles[0])
						render.onload = (e) => {
							editUserInfoServe({
								avatar: e.target.result
							}).then(res => {
								this.setUserInfo(res.data)
							})
						}
						// #endif
						// #ifdef APP-PLUS | MP
						uni.saveFile({
							tempFilePath: res.tempFilePaths[0],
							success: (res) => {
								editUserInfoServe({
									avatar: res.savedFilePath
								}).then(res => {
									this.setUserInfo(res.data)
								})
							}
						})
						// #endif

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