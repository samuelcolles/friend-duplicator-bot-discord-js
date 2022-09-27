'use strict'

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			'Shares',
			[
				{
					text: 'https://www.youtube.com/watch?v=SB-qEYVdvXA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					text: 'https://www.youtube.com/watch?v=NsUWXo8M7UA',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		)
		await queryInterface.bulkInsert('Praises', [
			{
				text: 'Good point',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				text: 'Very insightful',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
		await queryInterface.bulkInsert('CatchPhrases', [
			{
				text: 'Eh oh spaghettio',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				text: 'Thats the way she goes!',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
		await queryInterface.bulkInsert('Definitions', [
			{
				word: 'insanity',
				description:
					'Doing the same thing over and over again while expecting a different result.',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				word: 'cat',
				description: 'What do YOU think a cat is?',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
		await queryInterface.bulkInsert('Mocks', [
			{
				text: 'DuhhH',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				text: 'DERR',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				text: 'Doy',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
		await queryInterface.bulkInsert('Threasholds', [
			{
				phase: 1,
				messageNumber: 0,
				chanceToMock: 0.2,
				chanceToPraise: 0.2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				phase: 2,
				messageNumber: 100,
				chanceToMock: 0.2,
				chanceToPraise: 0.4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				phase: 3,
				messageNumber: 150,
				chanceToMock: 0.5,
				chanceToPraise: 0.4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				phase: 4,
				messageNumber: 200,
				chanceToMock: 0.9,
				chanceToPraise: 0.5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Shares', null, {})
		await queryInterface.bulkDelete('Praises', null, {})
		await queryInterface.bulkDelete('CatchPhrases', null, {})
		await queryInterface.bulkDelete('Definitions', null, {})
		await queryInterface.bulkDelete('Mocks', null, {})
		await queryInterface.bulkDelete('Threasholds', null, {})
	},
}
