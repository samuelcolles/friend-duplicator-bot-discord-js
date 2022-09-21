const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('define')
		.setDescription('Replies to certain key fraises')
		.addStringOption(subcommand =>
			subcommand
				.setName('word')
				.setDescription('word to define')
				.setRequired(false),

		),


	async execute(interaction) {
		const word = interaction.options._hoistedOptions[0].value
		const responseList = interaction.client.config.responses.definitions
		if (word in responseList) await interaction.reply(`${word}: ${responseList[word]}`)
		else await interaction.reply(`I don't know what "${word}" means.`)
	},
}