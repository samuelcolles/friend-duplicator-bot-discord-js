const { SlashCommandBuilder } = require('discord.js')
const exampleData = require('../exampleDefinitions.json')

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
		console.log(exampleData)
		if (word in exampleData) await interaction.reply(`${word}: ${exampleData[word]}`)
		else await interaction.reply(`I don't know what "${word}" means.`)

	},

}