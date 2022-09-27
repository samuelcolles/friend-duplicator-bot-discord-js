module.exports = {
	async handleUserResponses(message) {
		const { sequelize } = message.client
		const state = await sequelize.model('State').findOne()
		const { textChannel, phase } = state.dataValues
		const threashold = await sequelize
			.model('Threasholds')
			.findOne({ where: { phase } })

		const randomNumber = Math.random()
		const channel = message.client.channels.cache.get(textChannel)

		switch (phase) {
			case (1, 2, 3):
				if (threashold.dataValues.chanceToPraise < randomNumber) return
				const praise = await sequelize
					.model('Priases')
					.findOne({ order: sequelize.random() })
				await channel.send(`${praise.dataValues.text}, <@${senderID}>!`)
				break
		}
	},
}
