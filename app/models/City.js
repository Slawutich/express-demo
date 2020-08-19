const { Sequelize, DataTypes, Model } = require('sequelize');
var dbConnection = require('../utils/database');


class City extends Model { };


City.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
}, {
    sequelize: dbConnection,
    timestamps: false,
    tableName: 'cities',
});
