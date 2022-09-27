'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Threasholds', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			phase: {
				type: Sequelize.INTEGER,
			},
			messageNumber: {
				type: Sequelize.INTEGER,
			},
			chanceToMock: {
				type: Sequelize.DOUBLE,
			},
			chanceToPraise: {
				type: Sequelize.DOUBLE,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Threasholds')
	},
}
