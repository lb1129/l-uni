import {
	product_api,
	products_api
} from '@/interceptor/request/api.js'
import qs from 'query-string'
import {
	productGetServeMock,
	getProductsServeMock,
	productPostServeMock,
	productDeleteServeMock
} from '@/mock/index.js'

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const getProductByIdServe = (id) => productGetServeMock({
	url: qs.stringifyUrl({
		url: product_api,
		query: {
			id
		}
	})
})

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const saveProductServe = (product) => productPostServeMock({
	url: product_api,
	method: 'POST',
	data: product
})

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const deleteProductByIdsServe = (ids) => productDeleteServeMock({
	url: product_api,
	method: 'DELETE',
	data: ids
})

// NOTE 有服务接口 则把 ServeMock 切换成 uni.request
export const getProductsServe = (params) => getProductsServeMock({
	url: products_api,
	method: 'POST',
	data: params
})