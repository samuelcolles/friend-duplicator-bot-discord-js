'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CatchPhrases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('CatchPhrases')
  },
}
