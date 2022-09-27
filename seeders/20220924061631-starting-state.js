'use strict'
require('dotenv').config()

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('States', [{
      phase: 1,
      messageCounter: 0,
      guildID: process.env.GUILD_ID,
      textChannel: process.env.TEXT_CHANNEL_ID,
      target: process.env.TARGET_USER_ID,
      master: process.env.MASTER_USER_ID,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  async down(queryInterface) {

    await queryInterface.bulkDelete('States', null, {})

  },
}
