'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate() {
      // define association here
    }
  }
  State.init({
    phase: DataTypes.SMALLINT,
    messageCounter: DataTypes.INTEGER,
    guildID: DataTypes.STRING,
    textChannel: DataTypes.STRING,
    target: DataTypes.STRING,
    master: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'State',
  })
  return State
}