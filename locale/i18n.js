import {
	createI18n
} from 'vue-i18n'
import messages from './index.js'

const i18nConfig = {
	locale: uni.getLocale(),
	messages
}
const i18n = createI18n(i18nConfig)

export default i18n