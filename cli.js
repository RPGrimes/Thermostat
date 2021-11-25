let readlineSync = require('readline-sync');
const Thermostat = require('./thermostat.js');

const thermostat = new Thermostat;

let runThermostat = true;
while(runThermostat === true) {
  let currentTemperature = thermostat.getTemperature()
  console.log(`Welcome to the thermostat control centre. The current temperature is ${currentTemperature}.`);
  let command = readlineSync.question('Please enter a command > ')
    if(command === 'up'){
      thermostat.up();
  } else if(command === 'down') {
      thermostat.down();
  }  else if (command === 'exit') {
      runThermostat === false
      console.log('You have exited the thermostat control centre.')
      break
  } else {
    return 'Please enter a valid command.'
  }
}     

