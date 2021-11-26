const Weather = require('./weatherAPI.js')

const weather = new Weather;

class Thermostat{
  constructor(weather) {
    this.temperature = 20
    this.powerSavingMode = true
    this.minTemperature = 10
    this.weather = weather
    this.city = null
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean
  }

  getTemperature() {
    return this.temperature
  }

  maxTemperature() {
    if(this.powerSavingMode === true) {
      return 25
  } else {
      return 32
    }
  }

  up() {
    if(this.temperature < this.maxTemperature()) {
    this.temperature++
    }
  }

  down() {
    if (this.temperature > 10) {
    this.temperature--
    }
  }

  reset() {
    this.temperature = 20
  }

  usage() {
    if(this.temperature < 18) {
      return 'Low-useage'
    }
    else if(this.temperature <= 25){
      return 'Medium-useage'
    }
    else 
      return 'High-useage'
  }

  setCity(city) {
    this.city = city;
  }

  getCityTemperature() {
      if(this.city !== null) {
        this.weather.fetchWeatherData(this.city, (weatherData) => {
          console.log(`The current temperature in ${this.city} is ${weatherData.main.temp}.`);
      })
    } else {
      return('Please set a city before getting city temperature.')
    }
  }
};

const thermostat = new Thermostat(weather);
thermostat.setCity('Anadyr');
thermostat.getCityTemperature();

module.exports = Thermostat;
