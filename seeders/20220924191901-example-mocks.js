'use strict'

module.exports = {
  async up(queryInterface) {
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
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Mocks', null, {})
  },
}
