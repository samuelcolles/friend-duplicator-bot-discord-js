const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server_info')
		.setDescription('Display Information about the server'),
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return
		const serverName = interaction.member.guild.name
		const numberOfMembers = interaction.member.guild.memberCount
		const premiumTier = interaction.member.guild.premiumTier
		await interaction.reply({
			content: `Server Name: ${serverName}\nNumber of members: ${numberOfMembers}\nPremium Tier Level: ${premiumTier}`,
			ephemeral: true,
		})
		// await interaction.client.channels.cache
		// 	.get(process.env.TEXT_CHANNEL_ID)
		// 	.send(`Server Name: ${serverName}\nNumber of members: ${numberOfMembers}\nPremium Tier Level: ${premiumTier}`)

	},
}