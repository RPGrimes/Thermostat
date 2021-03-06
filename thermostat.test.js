const Thermostat = require('./thermostat.js');
const Weather = require('./weatherAPI.js');

describe("thermostat", () => {

  it('starts with a default temperature of 20', () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('increases the temperature by 1', () => {
    const thermostat = new Thermostat;
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21)
  });

  it('decreases the temperature by 1', () => {
    const thermostat = new Thermostat;
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19)
  })

  it('restricts the maximum temperature to 25 when power saving mode is on', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(true);
    for(let i=0; i < 10; i++){
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toBe(25);
  })

  it('restricts the maximum temperature to 32 when power saving mode is not on', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    for(let i=0; i < 20; i++){
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toBe(32);
  })

  it('checks temperature cannot be set below 10', () => {
    const thermostat = new Thermostat;
    for(let i = 0; i < 15; i++) {
      thermostat.down()
    }
    expect(thermostat.getTemperature()).toBe(10)
  })

  it('resets the thermostat to 20', () => {
    const thermostat = new Thermostat;
    thermostat.up()
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20)
  })

  it('returns a comment stating the energy useage is low', () => {
    const thermostat = new Thermostat;
    for(let i = 0; i < 3; i++) {
      thermostat.down()
    }
    expect(thermostat.usage()).toBe('Low-useage')
  })

  it('returns a comment stating the energy useage is low', () => {
    const thermostat = new Thermostat;
    expect(thermostat.usage()).toBe('Medium-useage')
  })

  it('returns a comment stating the energy useage is low', () => {
    const thermostat = new Thermostat;
    thermostat.setPowerSavingMode(false);
    for(let i = 0; i < 10; i++) {
      thermostat.up()
    }
    expect(thermostat.usage()).toBe('High-useage')
  })

  it('has no defined city and no current city temperature when construted', () => {
    const thermostat = new Thermostat;
    expect(thermostat.city).toBe(null)
    expect(thermostat.getCityTemperature()).toBe('Please set a city before getting city temperature.')
  })

  it('defines a city when city is set', () => {
    const weather = new Weather
    const thermostat = new Thermostat(weather);
    console.log(thermostat.weather)
    thermostat.setCity('Gibraltar')
    expect(thermostat.city).toBe('Gibraltar')
  })

  it('defines a city and city temperature when city is set', () => {
    const weather = new Weather
    const thermostat = new Thermostat(weather);
    console.log(thermostat.weather)
    thermostat.setCity('Gibraltar')
    expect(thermostat.city).toBe('Gibraltar')
    expect(thermostat.getCityTemperature()).toBe(15.97)   //NEED TO UPDATE THIS TO INCLUDE MOCKING
  })
});
