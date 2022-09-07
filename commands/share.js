const { SlashCommandBuilder } = require('discord.js')
const exampleData = require('../exampleSharables.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('share')
		.setDescription('Shares a url of some kind.'),
	async execute(interaction) {
		const phrases = exampleData.shareables
		const phrase = phrases[parseInt(phrases.length * Math.random())]
		await interaction.reply(phrase)

	},

}