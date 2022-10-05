const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('define')
		.setDescription('Replies to certain key fraises')
		.addStringOption(subcommand =>
			subcommand
				.setName('word')
				.setDescription('word to define')
				.setRequired(false)
		),

	async execute(interaction) {
		const word = interaction.options._hoistedOptions[0].value
		const { sequelize } = interaction.client
		const DefinitionList = await sequelize.model('Definitions').findAll()
		for (let i = 0; i < DefinitionList.length; i++) {
			if (DefinitionList[i].dataValues.word == word) {
				await interaction.reply(
					`${word}: ${DefinitionList[i].dataValues.description}`
				)
				return
			}
		}
		await interaction.reply(`I don't know what "${word}" means.`)
	},
}
