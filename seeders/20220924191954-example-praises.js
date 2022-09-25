'use strict'

module.exports = {
  async up(queryInterface) {
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
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('CatchPhrases', null, {})
  },
}
