const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('share')
		.setDescription('Shares a url of some kind.'),
	async execute(interaction) {
		const { sequelize } = interaction.client
		const share = await sequelize.model('Shares').findOne({ order: sequelize.random() })
		if (share.dataValues === undefined) {
			await interaction.reply('No data in "Shares" Table or no DataBase')
			return
		}
		await interaction.reply(share.dataValues.text)

	},
}