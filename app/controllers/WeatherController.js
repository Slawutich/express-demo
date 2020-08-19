'use strict';

const WeatherService = require('../services/WeatherService');
const weather = new WeatherService();

module.exports = class WeatherController {

    constructor() {

    }

    async getWeatherByCity(req, res, next){
        const stats = await weather.getStatsByCity(req.params.city);
        res.send(stats);
    }
}

