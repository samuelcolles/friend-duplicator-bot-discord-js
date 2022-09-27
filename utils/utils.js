const { handlePhaseChange } = require('../handlers/phaseChangeHandler')

module.exports = {
	whackyCase(input) {
		let res = ''
		for (let i = 0; i < input.length; i++) {
			res +=
				i % 2 === 0
					? input.charAt(i).toLowerCase()
					: input.charAt(i).toUpperCase()
		}
		return res
	},
	async updateMessageCounter(message) {
		const { sequelize } = message.client

		const stateModel = sequelize.model('State')
		const threasholds = await sequelize.model('Threasholds').findAll()
		const state = await stateModel.findOne()
		let { messageCounter, phase } = state.dataValues
		messageCounter++
		// console.log(threasholds)
		for (let i = 0; i < threasholds.length; i++) {
			if (threasholds[i].dataValues.messageNumber === messageCounter) {
				const newPhase = threasholds[i].dataValues.phase
				stateModel.update({ phase: newPhase }, { where: { id: 1 } })
				handlePhaseChange(newPhase, message)
				console.log('New Phase:' + newPhase)
			}
		}

		stateModel.update({ messageCounter: messageCounter }, { where: { id: 1 } })
		console.log(`Phase: ${phase}, Message Counter:${messageCounter}`)
	},
}
