import {
	themeKey
} from './keys.js'

export const themeStorage = {
	get() {
		return uni.getStorageSync(themeKey)
	},
	set(value) {
		uni.setStorageSync(themeKey, value)
	},
	clear() {
		uni.removeStorageSync(themeKey)
	}
}