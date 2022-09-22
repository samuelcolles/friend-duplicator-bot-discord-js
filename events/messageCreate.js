// I may have done this import wrong
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

		if (senderID === process.env.TARGET_USER_ID) {
			/* Handle messages coming from the target*/
			updateMessageCounter(message.client)
			const mocks = message.client.config.responses.mocks
			if (Math.random() < chanceToMock) await channel.send(`${whackyCase(message.content)}${mocks[parseInt(Math.random() * mocks.length)]}`)
			return

		} else if (Math.random() < chanceToPraise) {
			/* Handle messages coming from others in the same channel */
			const praises = message.client.config.responses.praises
			await channel.send(`${praises[parseInt(Math.random() * praises.length)]}, <@${senderID}>!`)
			return
		}
	},
}