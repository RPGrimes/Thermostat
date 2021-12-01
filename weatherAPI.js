const got = require('got');
const apiKey = 'removed for Github commit';

class Weather {

  fetchWeatherData(city, callback) {
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    got(apiURL).then((response) => {
      const weatherData = JSON.parse(response.body);
      callback(weatherData);
    })
  };
};

//test it works
// const weather = new Weather
// weather.fetchWeatherData('London', (weatherData) => {
//   console.log(weatherData)
// });

module.exports = Weather, apiKey;
