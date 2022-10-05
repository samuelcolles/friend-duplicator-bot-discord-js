const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('phase')
		.setDescription('Sets and checks the Phase')
		.addStringOption(subcommand =>
			subcommand
				.setName('phase')
				.setDescription(
					'Leave blank to see the phase and message count, or set phase 1-3'
				)
		),
	async execute(interaction) {
		const { sequelize } = interaction.client
		const state = await sequelize.model('State').findOne()
		const { master, phase, messageCounter } = state.dataValues
		// If someone other than the master uses this command tell them they can not use it
		if (interaction.user.id !== master) {
			await interaction.reply({
				content: 'You do not have permission to use this command.',
				ephemeral: true,
			})
			return
		}

		// If the phase set is blank or not a number show the master the phase number and message count
		const option = interaction.options._hoistedOptions[0]
		console.log(option)
		if (option === undefined || isNaN(option.value)) {
			await interaction.reply({
				content: `Phase: "${phase}" Message Count:"${messageCounter}"`,
				ephemeral: true,
			})
			return
		}
		try {
		} catch (error) {
			console.log(error)
		}
		const threashold = await sequelize
			.model('Threasholds')
			.findOne({ where: { phase: option.value } })
		const { phase: newPhase } = threashold.dataValues
		const newMessageNumber = threashold.dataValues.messageNumber + 1

		await sequelize
			.model('State')
			.update(
				{ phase: newPhase, messageCounter: newMessageNumber },
				{ where: { id: 1 } }
			)

		interaction.reply({
			content: `Phase set to: "${newPhase}"`,
			ephemeral: true,
		})
	},
}
