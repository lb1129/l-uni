// 公用模块用法请参考 https://uniapp.dcloud.io/uniCloud/cf-common
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
const privateKey = fs.readFileSync(path.resolve(__dirname, './pri.key'))
module.exports = {
	sign(payload) {
		return jwt.sign(payload, privateKey, {
			expiresIn: '24h'
		})
	},
	verify(token) {
		try {
			const res = jwt.verify(token, privateKey)
			return res
		} catch (err) {
			return null
		}
	}
}