const Thermostat = require('./thermostat.js');

describe("thermostat", () => {
  const thermostat = new Thermostat;
  it('starts with a default temperature of 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
});
