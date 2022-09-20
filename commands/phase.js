const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('phase')
		.setDescription('Sets what phase the bot is at.'),
	async execute(interaction) {
		if (interaction.user.id === process.env.MASTER_USER_ID) {
			interaction.reply({
				content: 'Phase set!',
				ephemeral: true,
			})
		} else {
			interaction.reply({
				content: 'You do not have permission to use this command.',
				ephemeral: true,
			})
		}

	},

}