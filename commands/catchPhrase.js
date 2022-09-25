const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('catch_phrase')
		.setDescription('Delivers a random catch phrase from a list'),
	async execute(interaction) {
		const { sequelize } = interaction.client
		const catchPhrase = await sequelize.model('CatchPhrases').findOne({ order: sequelize.random() })
		await interaction.reply(catchPhrase.dataValues.text)
	},

}