export const pathFull = (path) => {
	if (/^\//.test(path)) return path
	return `/${path}`
}