import {
	themeKey,
	tokenKey
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

export const tokenStorage = {
	get() {
		return uni.getStorageSync(tokenKey)
	},
	set(value) {
		uni.setStorageSync(tokenKey, value)
	},
	clear() {
		uni.removeStorageSync(tokenKey)
	}
}