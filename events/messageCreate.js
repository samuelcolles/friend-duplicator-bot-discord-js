// I may have done this import wrong
const path = require('node:path')
const { whackyCase } = require(path.join(__dirname, '../utils/whackyCase.js'))

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
			const mocks = message.client.responses.mocks
			if (Math.random() < chanceToMock) await channel.send(`${whackyCase(message.content)}${mocks[parseInt(Math.random() * mocks.length)]}`)
			return
		} else if (Math.random() < chanceToPraise) {
			const praises = message.client.responses.praises
			await channel.send(`${praises[parseInt(Math.random() * praises.length)]}, <@${senderID}>!`)
			return
		}
	},
}