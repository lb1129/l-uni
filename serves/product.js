import {
	product_get_by_id_api,
	product_delete_api,
	product_save_api,
	products_api
} from '@/interceptor/request/api.js'

export const getProductByIdServe = (id) => uni.request({
	url: product_get_by_id_api,
	data: {
		id
	}
})

export const saveProductServe = (product) => uni.request({
	url: product_save_api,
	method: 'POST',
	data: product
})

export const deleteProductByIdsServe = (ids) => uni.request({
	url: product_delete_api,
	method: 'DELETE',
	data: {
		ids
	}
})

export const getProductsServe = (params) => uni.request({
	url: products_api,
	method: 'POST',
	data: params
})