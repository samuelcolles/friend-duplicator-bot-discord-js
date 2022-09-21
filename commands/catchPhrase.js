const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('catch_phrase')
		.setDescription('Delivers a random catch phrase from a list'),
	async execute(interaction) {
		const phrases = interaction.client.config.responses.catch_phrases
		const phrase = phrases[parseInt(phrases.length * Math.random())]
		await interaction.reply(phrase)

	},

}