import permission from '@/common/permission'

// 当应用无访问摄像头/相册权限，引导跳到设置界面
uni.addInterceptor('chooseImage', {
	fail(e) {
		if (uni.getSystemInfoSync().platform == "android" && e.errMsg == 'chooseImage:fail No Permission') {
			if (e.code === 11) {
				uni.showModal({
					title: "无法访问摄像头",
					content: "当前无摄像头访问权限，建议前往设置",
					confirmText: "前往设置",
					success(e) {
						if (e.confirm) {
							permission.gotoAppSetting()
						}
					}
				});
			} else {
				uni.showModal({
					title: "无法访问相册",
					content: "当前无系统相册访问权限，建议前往设置",
					confirmText: "前往设置",
					success(e) {
						if (e.confirm) {
							permission.gotoAppSetting()
						}
					}
				});
			}
		} else if (e.errCode === 2 && e.errMsg == "chooseImage:fail No filming permission") {
			// 注：e.errCode === 8 ios无从相册选择图片的权限 api已内置无需自己用拦截器实现
			uni.showModal({
				title: "无法访问相册",
				content: "当前无系统相册访问权限，建议前往设置",
				confirmText: "前往设置",
				success(e) {
					if (e.confirm) {
						permission.gotoAppSetting()
					}
				}
			});
		}
	}
})