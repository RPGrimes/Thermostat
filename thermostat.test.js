const Thermostat = require('./thermostat.js');

describe("thermostat", () => {
  const thermostat = new Thermostat;
  it('starts with a default temperature of 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('increases the temperature by 1', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21)
  });
});
