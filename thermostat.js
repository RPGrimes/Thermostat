class Thermostat{
  constructor() {
    this.temperature = 20
    this.powerSavingMode = true
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
};

module.exports = Thermostat;