'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      phase: {
        type: Sequelize.SMALLINT,
      },
      messageCounter: {
        type: Sequelize.INTEGER,
      },
      guildID: {
        type: Sequelize.STRING,
      },
      textChannel: {
        type: Sequelize.STRING,
      },
      target: {
        type: Sequelize.STRING,
      },
      master: {
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
    await queryInterface.dropTable('States')
  },
}