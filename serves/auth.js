import {
	login_api,
	login_by_wx_api,
	logout_api,
	isLogin_api,
	register_api,
	findPassword_api,
	rsa_public_key_api
} from '@/interceptor/request/api.js'
import JSEncrypt from 'jsencrypt'

export const loginServe = async (data) => {
	const {
		username,
		password
	} = data
	// rsa加密
	const res = await uni.request({
		url: rsa_public_key_api
	})
	const encrypt = new JSEncrypt()
	encrypt.setPublicKey(res.data)
	return uni.request({
		url: login_api,
		data: {
			username,
			password: encrypt.encrypt(password)
		},
		method: 'POST'
	})
}

export const loginByWxServe = (ops) => uni.request({
	url: login_by_wx_api,
	data: ops,
	method: 'POST'
})

export const logoutServe = () => uni.request({
	url: logout_api
})

export const isLoginServe = () => uni.request({
	url: isLogin_api
})

export const registerServe = async (data) => {
	const {
		username,
		password,
		phone,
		code
	} = data
	// rsa加密
	const res = await uni.request({
		url: rsa_public_key_api
	})
	const encrypt = new JSEncrypt()
	encrypt.setPublicKey(res.data)
	return uni.request({
		url: register_api,
		data: {
			username,
			phone: Number(phone),
			code,
			password: encrypt.encrypt(password)
		},
		method: 'POST'
	})
}

export const findPasswordServe = async (data) => {
	const {
		password,
		phone,
		code
	} = data
	// rsa加密
	const res = await uni.request({
		url: rsa_public_key_api
	})
	const encrypt = new JSEncrypt()
	encrypt.setPublicKey(res.data)
	return uni.request({
		url: findPassword_api,
		data: {
			phone: Number(phone),
			code,
			password: encrypt.encrypt(password)
		},
		method: 'POST'
	})
}