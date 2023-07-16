import {
	createStore
} from 'vuex'

const store = createStore({
	state() {
		return {
			theme: '#007aff',
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
		setMenuData({
			commit
		}, menuData) {
			commit('updateMenuData', menuData)
		}
	},
	modules: {}
})

export default store