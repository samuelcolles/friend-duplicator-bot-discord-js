const path = require('node:path')
const { whackyCase } = require(path.join(__dirname, '../utils/utils.js'))

module.exports = {
	async handleTargetResponses(message) {
		const { sequelize } = message.client
		const state = await sequelize.model('State').findOne()
		const { textChannel, phase } = state.dataValues
		const threashold = await sequelize
			.model('Threasholds')
			.findOne({ where: { phase } })
		const channel = message.client.channels.cache.get(textChannel)
		if (threashold.dataValues.chanceToMock < Math.random()) return
		switch (phase) {
			case 1:
				const mock = await sequelize
					.model('Mocks')
					.findOne({ order: sequelize.random() })
				await channel.send(
					`${whackyCase(message.content)}, ${mock.dataValues.text}!`
				)
				break
			case 2:
				// Either do the starting mock or react with a poop emoji
				if (Math.random() < 0.5) {
					const mock = await sequelize
						.model('Mocks')
						.findOne({ order: sequelize.random() })
					await channel.send(
						`${whackyCase(message.content)}, ${mock.dataValues.text}!`
					)
				} else {
					await message.react('💩')
				}
				break
			case 3:
				//Replace the targets message with the same message, but from the bot.
				await message.delete()
				await channel.send(message.content)
				break
		}
	},
}
