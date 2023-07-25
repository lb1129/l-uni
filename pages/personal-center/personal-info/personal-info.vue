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
		<uni-list-item :title="$t('nickname')" to="/pages/personal-center/edit-nickname/edit-nickname" showArrow
			:right-text="$userInfo.nickname">
		</uni-list-item>
		<uni-list-item :title="$t('mobileNumber')" to="/pages/personal-center/edit-phone/edit-phone" showArrow
			:right-text="phone">
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
		computed: {
			phone() {
				return this.$userInfo.phone ? `${this.$userInfo.phone}` : this.$t('none')
			}
		},
		methods: {
			...mapActions(['setUserInfo']),
			changeAvatarHandler() {
				uni.chooseImage({
					count: 1,
					sourceType: ['camera', 'album'],
					sizeType: ['compressed', 'original'],
					success: async (res) => {
						if (res.tempFilePaths.length > 0) {
							let filePath = res.tempFilePaths[0]
							let cloudPath = ''
							// #ifdef H5
							cloudPath = Date.now() + res.tempFiles[0].name.substring(res.tempFiles[0].name
								.lastIndexOf('.'))
							// #endif
							// #ifndef H5
							cloudPath = Date.now() + res.tempFiles[0].path.substring(res.tempFiles[0].path
								.lastIndexOf('.'))
							// #endif
							try {
								const result = await uniCloud.uploadFile({
									filePath: filePath,
									cloudPath
								})
								await editUserInfoServe({
									avatar: result.fileID
								})
								this.setUserInfo({
									...this.$userInfo,
									avatar: result.fileID
								})
							} catch (e) {}
						}
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