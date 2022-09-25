'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CatchPhrase extends Model {
    static associate() {
      // define association here
    }
  }
  CatchPhrase.init({
    text: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CatchPhrases',
  })
  return CatchPhrase
}