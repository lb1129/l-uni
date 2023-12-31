// auth 模块
export const login_api = '/api/auth/login'
export const logout_api = '/api/auth/logout'
export const isLogin_api = '/api/auth/isLogin'
export const register_api = '/api/auth/register'
export const findPassword_api = '/api/auth/findPassword'

// oauth模块
export const login_by_wx_api = '/api/oauth/loginByWx'

// user模块
export const userInfo_get_api = '/api/user/getUserInfo'
export const userInfo_edit_api = '/api/user/editUserInfo'
export const userInfo_set_phone_api = '/api/user/setPhone'
export const userInfo_set_PushClientId_api = '/api/user/setPushClientId'

// 产品模块
export const product_get_by_id_api = '/api/product/getProductById'
export const product_save_api = '/api/product/saveProduct'
export const product_delete_api = '/api/product/deleteProductByIds'
export const products_api = '/api/product/getProducts'

// 菜单模块
export const menu_get_api = '/api/menu/getMenu'

// rsa加密公钥
export const rsa_public_key_api = '/api/rsa/getPublicKey'

// 其他
export const sendCode_api = '/api/sendCode'
export const wgtUpdate_api = '/api/wgtUpdate'

// 消息模块
export const message_set_read_api = '/api/message/setMessageRead'
export const message_get_by_id_api = '/api/message/getMessageById'
export const message_delete_api = '/api/message/deleteMessageByIds'
export const messages_api = '/api/message/getMessages'