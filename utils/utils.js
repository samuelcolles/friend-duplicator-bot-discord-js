module.exports = {
	whackyCase(input) {
		let res = ''
		for (let i = 0; i < input.length; i++) {
			res += i % 2 === 0 ? input.charAt(i).toLowerCase() : input.charAt(i).toUpperCase()
		}
		return res
	},
	async updateMessageCounter(client) {
		const { sequelize } = client
		const stateModel = sequelize.model('State')
		const state = await stateModel.findOne()
		const { phase, messageCounter } = state.dataValues

		console.log(`Phase:${phase}, Message Counter:${messageCounter}`)
		stateModel.update({ messageCounter: messageCounter + 1 }, { where: { id: 1 } })
	},

}