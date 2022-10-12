module.exports = {
	async handleUserResponses(message) {
		const { sequelize } = message.client
		const state = await sequelize.model('State').findOne()
		const { textChannel, phase } = state.dataValues
		const threashold = await sequelize
			.model('Threasholds')
			.findOne({ where: { phase } })
		const channel = message.client.channels.cache.get(textChannel)

		if (threashold.dataValues.chanceToPraise < Math.random()) return
		switch (phase) {
			case 1:
				const member = await message.guild.members.fetch(message.author.id)
				const praise = await sequelize
					.model('Praises')
					.findOne({ order: sequelize.random() })
				await channel.send(`${praise.dataValues.text}, ${member.nickname}!`)
				break
			case 2:
			case 3:
				await message.react('👍')
				break
		}
	},
}
