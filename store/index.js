import {
	createStore
} from 'vuex'
import config from '@/config.json'

const store = createStore({
	state() {
		return {
			theme: config.theme,
			userInfo: {},
			menuData: []
		}
	},
	mutations: {
		updateTheme(state, theme) {
			state.theme = theme
		},
		updateUserInfo(state, userInfo) {
			state.userInfo = userInfo
		},
		updateMenuData(state, menuData) {
			state.menuData = menuData
		}
	},
	actions: {
		setTheme({
			commit
		}, theme) {
			commit('updateTheme', theme)
		},
		setUserInfo({
			commit
		}, userInfo) {
			commit('updateUserInfo', userInfo)
		},
		resetUserInfo({
			commit
		}) {
			commit('updateUserInfo', {})
		},
		setMenuData({
			commit
		}, menuData) {
			commit('updateMenuData', menuData)
		},
		resetMenuData({
			commit
		}) {
			commit('updateMenuData', [])
		}
	},
	modules: {}
})

export default store