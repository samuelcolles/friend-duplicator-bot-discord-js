'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Threashold extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate() {
			// define association here
		}
	}
	Threashold.init(
		{
			phase: DataTypes.INTEGER,
			messageNumber: DataTypes.INTEGER,
			chanceToMock: DataTypes.DOUBLE,
			chanceToPraise: DataTypes.DOUBLE,
		},
		{
			sequelize,
			modelName: 'Threasholds',
		},
	)
	return Threashold
}
