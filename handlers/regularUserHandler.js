module.exports = {
	async handleUserResponses(message) {
		const { sequelize } = message.client
		const state = await sequelize.model('State').findOne()
		const { textChannel, phase } = state.dataValues
		const threashold = await sequelize
			.model('Threasholds')
			.findOne({ where: { phase } })
		const channel = message.client.channels.cache.get(textChannel)

		switch (phase) {
			case 1:
			case 2:
			case 3:
				if (threashold.dataValues.chanceToPraise < Math.random()) return
				const praise = await sequelize
					.model('Praises')
					.findOne({ order: sequelize.random() })
				await channel.send(`${praise.dataValues.text}, ${message.author.id}!`)
				break
		}
	},
}
