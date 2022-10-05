const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Add to the database')
		.addStringOption(subcommand =>
			subcommand
				.setName('input')
				.setDescription(
					'Add a catch_phrase, share_link, definition, praise, or mock'
				)
				.setRequired(true)
		),
	async execute(interaction) {
		if (interaction.options._hoistedOptions === undefined) return
		const input = interaction.options._hoistedOptions[0].value
		const inputArray = input.split(' ')
		let response = ''
		const { sequelize } = interaction.client

		// .findOne({ order: sequelize.random() })
		let text
		switch (inputArray[0]) {
			case 'definition':
				const word = inputArray[1]
				inputArray.splice(0, 2)
				const definition = inputArray.join(' ')
				await sequelize.model('Definitions').create({
					word,
					description: definition,
				})
				response = `Word Added: "${word}" Definition: "${definition}"`
				break
			case 'catch_phrase':
				inputArray.splice(0, 1)
				text = inputArray.join(' ')
				await sequelize.model('CatchPhrases').create({
					text,
				})
				response = `Catch Phrase Added: "${text}"`
				break
			case 'share_link':
				inputArray.splice(0, 1)
				text = inputArray.join(' ')
				await sequelize.model('Shares').create({
					text,
				})
				response = `Catch Phrase Added: "${text}"`
				break
			case 'praise':
				inputArray.splice(0, 1)
				text = inputArray.join(' ')
				await sequelize.model('Praises').create({
					text,
				})
				response = `Praise Added: "${text}"`
				break
			case 'mock':
				inputArray.splice(0, 1)
				const text = inputArray.join(' ')
				await sequelize.model('Mocks').create({
					text,
				})
				response = `Mock Added: "${text}"`
				break
			default:
				response = `Invalid type: "${inputArray[0]}".`
				break
		}

		await interaction.reply(response)
	},
}
