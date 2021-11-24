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
});
