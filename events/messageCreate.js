const path = require('node:path')
const { whackyCase, updateMessageCounter } = require(path.join(__dirname, '../utils/utils.js'))

const chanceToMock = 1
const chanceToPraise = 0.4

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		// only reply to messages in a certain channel and ignore messages that are sent by this bot
		const senderID = message.author.id
		if (message.channelId !== process.env.TEXT_CHANNEL_ID || senderID === message.client.user.id) return

		const channel = message.client.channels.cache.get(process.env.TEXT_CHANNEL_ID)
		const { sequelize } = message.client

		if (senderID === process.env.TARGET_USER_ID) {
			/* Handle messages coming from the target*/
			if (Math.random() < chanceToMock) {
				updateMessageCounter(message.client)
				const mock = await sequelize.model('Mocks').findOne({ order: sequelize.random() })
				await channel.send(`${whackyCase(message.content)}${mock.dataValues.text}`)
				return
			}

		} else if (Math.random() < chanceToPraise) {
			/* Handle messages coming from others in the same channel */
			const praise = await sequelize.model('Mocks').findOne({ order: sequelize.random() })
			await channel.send(`${praise.dataValues.text}, <@${senderID}>!`)
			return
		}
	},
}