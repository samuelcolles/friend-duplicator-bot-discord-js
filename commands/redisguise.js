const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('redisguise')
		.setDescription('Set avatar and nickname to match target'),
	async execute(interaction) {
		const { sequelize } = interaction.client
		const state = await sequelize.model('State').findOne()
		const { target } = state.dataValues

		const targetMember = await interaction.guild.members.fetch(target)
		const targetNickname = targetMember.nickname

		const thisUserMember = await interaction.guild.members.fetch(
			interaction.client.user.id
		)
		const thisUserNickname = thisUserMember.nickname

		try {
			// Re-apply Avatar happens every time
			interaction.client.user.setAvatar(targetMember.user.displayAvatarURL())
		} catch (err) {
			console.log(err)
		}

		// Exit if target does not have a nickname set on the server
		if (targetNickname === null || undefined) {
			interaction.reply({
				content: 'Nickname is null',
				ephemeral: true,
			})
		}

		if (
			thisUserNickname !== null &&
			targetNickname === thisUserNickname.slice(0, targetNickname.length)
		) {
			interaction.reply({
				content: 'Nickname Already applied.\nAvatar Updated',
				ephemeral: true,
			})
			return
		}

		await thisUserMember.setNickname(`${targetNickname} 2.0`)
		interaction.reply({
			content: 'Nickname and Avatar Updated.',
			ephemeral: true,
		})
	},
}
