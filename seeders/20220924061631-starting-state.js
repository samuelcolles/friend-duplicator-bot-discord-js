'use strict'
require('dotenv').config()

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			'States',
			[
				{
					phase: 1,
					messageCounter: 0,
					guildID: process.env.GUILD_ID,
					textChannel: process.env.TEXT_CHANNEL_ID,
					target: process.env.TARGET_USER_ID,
					master: process.env.MASTER_USER_ID,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
		await queryInterface.bulkInsert('Threasholds', [
			{
				phase: 1,
				messageNumber: 0,
				chanceToMock: 0.2,
				chanceToPraise: 0.3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				phase: 2,
				messageNumber: 40,
				chanceToMock: 0.2,
				chanceToPraise: 0.2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				phase: 3,
				messageNumber: 80,
				chanceToMock: 0.9,
				chanceToPraise: 0.6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				phase: 4,
				messageNumber: 120,
				chanceToMock: 0.0,
				chanceToPraise: 0.0,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('States', null, {})
		await queryInterface.bulkDelete('Threasholds', null, {})
	},
}
