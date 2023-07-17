export default {
	// 应用首次进入（H5 浏览器地址栏回车|浏览器刷新） （APP 小程序 重进）
	// 必须去服务器验证是否登录（本地储存的token不可信）
	// 默认pending状态 
	value: new Promise(() => {})
}