module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		const command = interaction.client.commands.get(interaction.commandName)
		if (!command) return
		try {
			await command.execute(interaction)
		} catch (err) {
			console.log(err)
		}
	},
}