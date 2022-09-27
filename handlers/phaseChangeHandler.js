module.exports = {
	async handlePhaseChange(phase, message) {
		console.log(phase)
		console.log(message)
		switch (phase) {
			case 2:
				await message.reply('>:)')
		}
	},
}
