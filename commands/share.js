const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('share')
		.setDescription('Shares a url of some kind.'),
	async execute(interaction) {
		const phrases = interaction.client.responses.shareables
		const phrase = phrases[parseInt(phrases.length * Math.random())]
		await interaction.reply(phrase)

	},

}