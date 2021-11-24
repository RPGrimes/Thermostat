const Thermostat = require('./thermostat.js');

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
});
