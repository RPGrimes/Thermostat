let readlineSync = require('readline-sync');
const Thermostat = require('./thermostat.js');

const thermostat = new Thermostat;

let runThermostat = true;

console.log('Welcome to the thermostat control centre.')

while(runThermostat === true) {
  let currentTemperature = thermostat.getTemperature()
  const logTemperature = `The current temperature is ${currentTemperature}.`
  
    if(currentTemperature === thermostat.minTemperature){
      console.log(`${logTemperature} - minimum temperature reached`);
  } else if(currentTemperature === thermostat.maxTemperature() && thermostat.powerSavingMode === true) {
      console.log(`${logTemperature} - maximum temperature reached (psm on)`);
  } else if(currentTemperature === thermostat.maxTemperature() && thermostat.powerSavingMode !== true) {
    console.log(`${logTemperature} - maximum temperature reached (psm off)`);
  } else {
  console.log(`${logTemperature}`)
}
  
  let command = readlineSync.question('Please enter a command > ')
    if(command === 'up'){
      thermostat.up();
  } else if(command === 'down') {
      thermostat.down();
  } else if(command === 'psm off') {
      thermostat.setPowerSavingMode(false)
  } else if(command === 'psm on') {
      thermostat.setPowerSavingMode(true);
  } else if(command === 'reset') {
      thermostat.reset();
  } else if(command === 'usage') {
      thermostat.usage();
      console.log(`Current usage is: ${thermostat.usage()}`)
  } else if (command === 'exit') {
      runThermostat === false
      console.log('You have exited the thermostat control centre.')
      break
  } else {
    return 'Please enter a valid command.'
  }
}     

