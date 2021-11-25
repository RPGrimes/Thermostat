class Thermostat{
  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
    this.minTemperature = 10
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
};

module.exports = Thermostat;
