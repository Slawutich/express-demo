const config = require('../config');
const { Sequelize } = require('sequelize');

const dbCfg = config.database;


module.exports = new Sequelize({
    dialect: dbCfg.type,
    host: dbCfg.host,
    port: dbCfg.port,
    username: dbCfg.user,
    password: dbCfg.password,
    database: dbCfg.database,
    //logging: (...msg) => console.log(msg),
});

