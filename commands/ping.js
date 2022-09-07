const { SlashCommandBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check to see if the bot is up and running'),
	async execute(interaction, client) {
		console.log(client)
		await interaction.reply('STATUS: ASSESSING')
		await wait(1000)
		await interaction.editReply('STATUS: ALL SYSTEMS GREEN')
	},
}