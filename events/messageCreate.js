const chanceToMock = 1
const chanceToPraise = 0.4

const praises = [
	'Good point',
	'Very insightful',
	'I couldn\'t agree more',
]
module.exports = {
	name: 'messageCreate',
	async execute(message) {
		// only reply to messages in a certain channel and ignore messages that are sent by this bot
		const senderID = message.author.id
		if (message.channelId !== process.env.TEXT_CHANNEL_ID || senderID === message.client.user.id) return
		function whackyCase(input) {
			let res = ''
			for (let i = 0; i < input.length; i++) {
				res += i % 2 === 0 ? input.charAt(i).toLowerCase() : input.charAt(i).toUpperCase()
			}
			return res
		}

		const channel = message.client.channels.cache.get(process.env.TEXT_CHANNEL_ID)
		if (senderID === process.env.TARGET_USER_ID) {
			const mocks = message.client.responses.mocks
			if (Math.random() < chanceToMock) await channel.send(`${whackyCase(message.content)}${mocks[parseInt(Math.random() * mocks.length)]}`)
			return
		} else if (Math.random() < chanceToPraise) {
			await channel.send(`${praises[parseInt(Math.random() * praises.length)]}, <@${senderID}>!`)
			return
		}
	},
}