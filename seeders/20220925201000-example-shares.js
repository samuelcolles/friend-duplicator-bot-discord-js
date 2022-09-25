'use strict'

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Shares', [
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
    ], {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Shares', null, {})
  },
}
