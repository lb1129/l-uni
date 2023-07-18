import i18n from '@/locale/i18n.js'
import {
	wgtUpdate_api
} from '@/interceptor/request/api.js'

const wgtUpdate = () => {
	plus.runtime.getProperty(plus.runtime.appid, async (widgetInfo) => {
		try {
			const wgtUpdateRes = await uni.request({
				url: wgtUpdate_api,
				hiddenErrMsg: true,
				data: {
					version: widgetInfo.version,
					name: widgetInfo.name
				}
			})
			const modalRes = await uni.showModal({ //提醒用户更新
				title: i18n.global.t('tip'),
				content: i18n.global.t('haveNewVersion')
			})
			if (modalRes.confirm) {
				const downloadResult = await uni.downloadFile({
					url: wgtUpdateRes.data
				})
				if (downloadResult.statusCode === 200) {
					plus.runtime.install(downloadResult.tempFilePath, {
							force: false
						},
						() => {
							plus.runtime.restart()
						},
						(e) => {
							uni.showToast({
								icon: "none",
								title: i18n.global.t('updateFailed')
							})
						})
				}
			}
		} catch (e) {}
	})
}

export default wgtUpdate