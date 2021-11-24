class Thermostat{
  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
    this.minTemperature = 10
  }

  getTemperature() {
    if(this.powerSavingMode === true && this.temperature > 25) {
      let maxTemperature = 25
      return maxTemperature
    }
    else if(this.powerSavingMode !== true && this.temperature > 32) {
      let maxTemperature = 32
      return maxTemperature
    }
    else if (this.temperature < 10) {
      return this.minTemperature
    }
    else
    return this.temperature
  }

  up() {
    this.temperature++
  }

  down() {
    this.temperature--
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean
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