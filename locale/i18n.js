import {
	createI18n
} from 'vue-i18n'
import en from './en.json'
import zhHans from './zh-Hans.json'
const messages = {
	en,
	'zh-Hans': zhHans
}

const i18nConfig = {
	locale: uni.getLocale(),
	messages
}
const i18n = createI18n(i18nConfig)

export default i18n