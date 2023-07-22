module.exports = {
	validatePhone(phone) {
		return /^1[3456789]\d{9}$/.test(phone)
	},
	validatePassword(password) {
		return /^[a-zA-Z0-9]+$/.test(password)
	}
}