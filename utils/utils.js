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
		if (client.config.messageCounter === client.config.threasholds.phase2) {
			console.log('Phase 2 activated!')
			client.config.phase = 2
		}
		if (client.config.messageCounter === client.config.threasholds.phase3) {
			console.log('Phase 3 activated!')
			client.config.phase = 3
		}
		if (client.config.messageCounter === client.config.threasholds.retire) {
			console.log('Final Phase complete, retiring robot.')
			client.config.phase = 4
		}
		// save the message counter to the config
		console.log(client.config.messageCounter)
		fs.writeFileSync(path.join(__dirname, '../customConfig.json'), JSON.stringify(client.config, null, 4))
	},

}