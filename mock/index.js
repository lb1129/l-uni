import userData from './userData.json'
import userMenuData from './userMenuData.json'
import userProductData from './userProductData.json'
import queryString from 'query-string'
import {
	v4 as uuidv4
} from 'uuid'
import {
	tokenStorage
} from '@/storage/index.js'
import {
	cloneDeep
} from 'lodash-es'

let productMockData = cloneDeep(userProductData)

let userMockData = cloneDeep(userData)

let hasLoading = false
const mock = (fn, needAuth) => (req) => new Promise((resolve, reject) => {
	if (!hasLoading) {
		hasLoading = true
		uni.showLoading({
			mask: true
		})
	}
	let timer = null
	const resolveMock = (data, message) => {
		if (process.env.NODE_ENV === 'development')
			console.log(req.url, data)
		clearTimeout(timer)
		timer = null
		hasLoading = false
		uni.hideLoading()
		resolve({
			data,
			message: message ?? 'ok'
		})
	}
	const rejectMock = (err, message) => {
		if (process.env.NODE_ENV === 'development')
			console.log(req.url, err, message)
		const msg = message ?? 'fail'
		clearTimeout(timer)
		timer = null
		hasLoading = false
		uni.hideLoading()
		reject({
			data: err,
			message: msg
		})
		if (msg === '未登录') {
			const pages = getCurrentPages()
			const page = pages[pages.length - 1]
			if (page && page.route !== 'pages/login/login')
				uni.reLaunch({
					url: '/pages/login/login'
				})
		} else {
			uni.showToast({
				icon: 'none',
				title: msg
			})
		}
	}
	timer = setTimeout(() => {
		if (needAuth) {
			const token = tokenStorage.get()
			if (!token) {
				rejectMock(false, '未登录')
				return
			}
			const isValid = !!userData[token]
			if (!isValid) {
				rejectMock(false, '未登录')
				return
			}
			req.userName = token
		}
		fn.call(null, req, resolveMock, rejectMock)
	}, 200)
})

export const loginServeMock = mock((req, resolve, reject) => {
	const {
		userName,
		password
	} = req.data
	const userInfo = userData[userName]
	if (!userInfo || password !== 'a123456') {
		reject(null, '用户名或密码错误')
	} else {
		const token = userInfo.userName
		resolve(token)
	}
})

export const loginByWxServeMock = mock((req, resolve, reject) => {
	const {
		code
	} = req.data
	if (code) {
		resolve('viho')
	} else {
		reject(null, '授权临时票据无效')
	}
})

export const logoutServeMock = mock((req, resolve, reject) => {
	productMockData = cloneDeep(userProductData)
	resolve(null)
})

export const isLoginServeMock = mock((req, resolve, reject) => {
	resolve(true)
}, true)

export const menuServeMock = mock((req, resolve, reject) => {
	const menu = userMenuData[req.userName]
	resolve([...menu])
}, true)

export const userInfoServeMock = mock((req, resolve, reject) => {
	const userInfo = userData[req.userName]
	resolve({
		...userInfo
	})
}, true)

export const userInfoPostServeMock = mock((req, resolve, reject) => {
	const userInfo = req.data
	const oldUserInfo = userMockData[req.userName]
	Object.assign(oldUserInfo, userInfo)
	resolve({
		...oldUserInfo
	})
}, true)

export const productGetServeMock = mock((req, resolve, reject) => {
	const res = queryString.parseUrl(req.url)
	const product = productMockData.find((product) => product.id === res.query.id)
	if (product) resolve(product)
	else reject(null, '产品未找到')
}, true)

export const productPostServeMock = mock((req, resolve, reject) => {
	const product = req.data
	const {
		id
	} = product
	if (id) {
		const index = productMockData.findIndex((record) => record.id === id)
		productMockData.splice(index, 1, product)
		resolve(id)
	} else {
		const newId = uuidv4()
		productMockData.unshift({
			...product,
			id: newId
		})
		resolve(newId)
	}
}, true)

export const productDeleteServeMock = mock((req, resolve, reject) => {
	const ids = req.data
	productMockData = productMockData.filter((product) => ids.indexOf(product.id) === -1)
	resolve(null)
}, true)

export const getProductsServeMock = mock((req, resolve, reject) => {
	const {
		keyword,
		pagination
	} = req.data
	let data = productMockData
	let total = data.length
	if (keyword) {
		data = productMockData.filter((product) => {
			return product.name.indexOf(keyword) !== -1
		})
		total = data.length
	}
	const {
		pageNo,
		pageSize
	} = pagination
	data = data.slice(0, pageNo * pageSize)
	resolve({
		pageNo,
		pageSize,
		total,
		data
	})
}, true)