import {
	message_set_read_api,
	message_delete_api,
	message_get_by_id_api,
	messages_api
} from '@/interceptor/request/api.js'

export const setMessageReadServe = (ids) => uni.request({
	url: message_set_read_api,
	method: "POST",
	data: {
		ids
	}
})

export const getMessageByIdServe = (id) => uni.request({
	url: message_get_by_id_api,
	data: {
		id
	}
})

export const deleteMessageIdsServe = (ids) => uni.request({
	url: message_delete_api,
	method: 'DELETE',
	data: {
		ids
	}
})

export const getMessagesServe = (params) => uni.request({
	url: messages_api,
	method: 'POST',
	data: params
})