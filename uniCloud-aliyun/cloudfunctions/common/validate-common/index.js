module.exports = {
	isPhone(phone) {
		return /^1[3456789]\d{9}$/.test(phone)
	},
	isPassword(password) {
		return /^[a-zA-Z0-9]{7,10}$/.test(password)
	},
	isNoValue(value) {
		if (value === null) return true
		if (value === undefined) return true
		if (typeof value === 'string' && !value) return true
		return false
	}
}