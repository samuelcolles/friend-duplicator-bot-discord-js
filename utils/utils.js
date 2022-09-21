const fs = require('node:fs')
const path = require('node:path')

module.exports = {
	whackyCase(input) {
		let res = ''
		for (let i = 0; i < input.length; i++) {
			res += i % 2 === 0 ? input.charAt(i).toLowerCase() : input.charAt(i).toUpperCase()
		}
		return res
	},
	updateMessageCounter(client) {

		client.config.messageCounter++
		console.log(client.config.messageCounter)
		console.log(path.join(__dirname, '../customConfig.json'))
		fs.writeFileSync(path.join(__dirname, '../customConfig.json'), JSON.stringify(client.config, null, 4))
	},

}