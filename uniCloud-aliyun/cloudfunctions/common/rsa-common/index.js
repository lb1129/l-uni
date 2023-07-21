const fs = require('fs')
const path = require('path')
const NodeRsa = require('node-rsa')

module.exports = {
	getPublicKey() {
		return fs.readFileSync(path.resolve(__dirname, './pub.key')).toString()
	},
	// 私钥解密
	decrypt(str) {
		const privateKey = fs.readFileSync(path.resolve(__dirname, './pri.key')).toString()
		const nodeRsa = new NodeRsa(privateKey)
		return nodeRsa.decrypt(str, 'utf8')
	},
	// 公钥加密
	encrypt(str) {
		const publicKey = fs.readFileSync(path.resolve(__dirname, './pub.key')).toString()
		const nodeRsa = new NodeRsa(publicKey)
		return nodeRsa.encrypt(str, 'base64')
	}
}