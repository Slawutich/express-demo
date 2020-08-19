const { Sequelize, DataTypes, Model } = require('sequelize');
var dbConnection = require('../utils/database');


class Weather extends Model { };


Weather.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cityId: {
	    type: DataTypes.INTEGER,
	    references: {
	        model: dbConnection.models.City,
	        key: 'id',
		}
    },
    temperature: { type: DataTypes.INTEGER },
    humidity: { type: DataTypes.INTEGER },
    date: { type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false},
}, {
    sequelize: dbConnection,
    timestamps: false,
    tableName: 'weather',
});

Weather.belongsTo(dbConnection.models.City, {
    foreignKey: 'cityId'
});