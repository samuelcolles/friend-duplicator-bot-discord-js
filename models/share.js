'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Share extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Share.init({
    text: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Shares',
  })
  return Share
}