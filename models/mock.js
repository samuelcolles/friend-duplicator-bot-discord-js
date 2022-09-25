'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Mock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Mock.init({
    text: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Mocks',
  })
  return Mock
}