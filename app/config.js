'use strict';

const config = {
        port: 3000,
        controllersPath: '../controllers',
        database: {
            type     : process.env.DB_TYPE || 'postgres',
            host     : process.env.DB_HOST || 'localhost',
            port     : process.env.DB_PORT || '5432',
            user     : process.env.DB_USER || 'express-demoUser',
            password : process.env.DB_PASSWORD || 'kZfHg6FYM953k2u7pzssLLK4lNryag',
            database : process.env.DB_NAME || 'express-demo',
        }
};


module.exports = config;