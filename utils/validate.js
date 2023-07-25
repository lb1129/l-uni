export const isPhone = (phone) => /^1[3456789]\d{9}$/.test(phone)

export const isPassword = (password) => /^[a-zA-Z0-9]{7,10}$/.test(password)

export const isNoValue = (value) => {
	if (value === null) return true
	if (value === undefined) return true
	if (typeof value === 'string' && !value) return true
	return false
}