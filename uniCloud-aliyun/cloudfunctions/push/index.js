'use strict';
const uniPush = uniCloud.getPushManager({
	appId: "__UNI__C9C6C5A"
})
exports.main = async (event = {}, context) => {
	const {
		push_clientid,
		title,
		content,
		payload
	} = event
	return await uniPush.sendMessage({
		push_clientid,
		title,
		content,
		payload
	})
};