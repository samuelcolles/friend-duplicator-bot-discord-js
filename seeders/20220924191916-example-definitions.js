'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Definitions', [
      {
        word: 'insanity',
        description: 'Doing the same thing over and over again while expecting a different result.',
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
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Definitions', null, {})
  },
}
