const config = require('./config');
const express = require('express');
const controllers = require('./utils/controller-resolver');
require('./models');

const app = express();


app.get('/', controllers('IndexController:main'));
app.get('/weather/:city', controllers('WeatherController:getWeatherByCity'));



app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
});