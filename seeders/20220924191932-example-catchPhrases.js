'use strict'

module.exports = {
  async up(queryInterface) {
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
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('CatchPhrases', null, {})
  },
}
