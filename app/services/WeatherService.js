'use strict';
const { Op } = require("sequelize");
const dbConnection = require('../utils/database');
const moment = require('moment');


module.exports = class WeatherService {

    constructor() {

    }

    getByDayAndCity(date, city){
        return dbConnection.models.Weather.findOne({
              where: {
                  [Op.and]: [{
                            date: {
                                [Op.between]: [
                                    date + ' 00:00:00',
                                    date + ' 23:59:59'
                                ]
                            }
                        }
                  ],
              },
              order: [
                  ['date', 'DESC'],
              ],
              include: [{
			      model: dbConnection.models.City,
			      where: {
			        name: city
			      },
			      attributes: []
		      }]
        });
    }

    getAvgByDateAndCity(dateFrom, dateTo, city){
        return dbConnection.models.Weather.findOne({
            attributes: [[dbConnection.fn('AVG', dbConnection.col('temperature')), 'temperature']],
            where: {
                  [Op.and]: [{
                            date: {
                                [Op.between]: [
                                    dateFrom + ' 00:00:00',
                                    dateTo + ' 23:59:59'
                                ]
                            }
                        }
                  ],
              },
              include: [{
                  model: dbConnection.models.City,
                  where: {
                    name: city
                  },
                  attributes: ['id']
              }],
              group: ["City.id"]
        });
    }


    getStatsByCity(city){
        const dateToday = moment().format('YYYY-MM-DD');
        const dateYesterday = moment().add(-1, 'days').format('YYYY-MM-DD');
        const dateMondey = moment().startOf('isoWeek').format('YYYY-MM-DD');

        return Promise.all([
            this.getByDayAndCity(dateToday, city),
            this.getByDayAndCity(dateYesterday, city),
            this.getAvgByDateAndCity(dateMondey, dateToday, city),
        ]).then(([today, yesterday, average]) => {
            return {
                'today': (today || {}).temperature,
				'yesterday': (yesterday || {}).temperature,
				'week-average': (average || {}).temperature,
            }
        });
    }
}

