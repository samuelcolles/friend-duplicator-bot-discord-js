'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Definition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Definition.init({
    word: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Definitions',
  })
  return Definition
}