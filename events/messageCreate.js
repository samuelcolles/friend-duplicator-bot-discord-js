const path = require('node:path')
const { updateMessageCounter } = require('../utils/utils.js')
const { handleTargetResponses } = require('../handlers/targetHandler.js')
const { handleUserResponses } = require('../handlers/regularUserHandler.js')

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		const senderID = message.author.id
		const { sequelize } = message.client
		const state = await sequelize.model('State').findOne()
		const { textChannel, target } = state.dataValues

		// only reply to messages in a certain channel and ignore messages that are sent by this bot
		if (
			message.channelId !== textChannel ||
			senderID === message.client.user.id
		)
			return

		if (senderID === target) {
			/* Handle messages coming from the target*/
			updateMessageCounter(message)
			handleTargetResponses(message)
			return
		}
		/* Handle messages coming from others in the same channel */
		handleUserResponses(message)
		return
	},
}
