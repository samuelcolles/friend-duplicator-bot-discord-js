const { SlashCommandBuilder } = require('discord.js')
const exampleData = require('../exampleCatchPhrases.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('catch_phrase')
		.setDescription('Delivers a random catch phrase from a list'),
	async execute(interaction) {
		const phrases = exampleData.catch_phrases
		const phrase = phrases[parseInt(phrases.length * Math.random())]
		await interaction.reply(phrase)

	},

}