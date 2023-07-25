import {
	pathFull
} from '@/common/pathFull.js'

export const operateAuthMixin = {
	computed: {
		$operateAuth() {
			const pages = getCurrentPages()
			const page = pages[pages.length - 1]
			const path = pathFull(page.route)
			// 找到该页面操作权限
			let operateAuth = {}
			let menuData = [...this.$menuData]
			let pathArr = []
			while (menuData.length) {
				const record = menuData.shift()
				if (
					pathArr.length &&
					pathArr[pathArr.length - 1].children.findIndex((child) => child._id === record._id) === -1
				)
					pathArr = []
				pathArr.push(record)
				if (pathFull(pathArr.map(item => item.path).join('')) === path) {
					operateAuth = record.operate_auth
					break
				} else {
					const children = record.children
					if (children && children.length)
						menuData = [...children, ...menuData]
				}
			}
			return operateAuth
		},
		$canAdd() {
			return this.$operateAuth.add !== 0
		},
		$canEdit() {
			return this.$operateAuth.edit !== 0
		},
		$canDelete() {
			return this.$operateAuth.delete !== 0
		},
		$canDetail() {
			return this.$operateAuth.detail !== 0
		},
		$menuData() {
			return this.$store.state.menuData
		}
	}
}