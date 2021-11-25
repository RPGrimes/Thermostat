// 1 

const CANDIES_DB = ['Mars', 'Maltesers', 'Skittles', 'Fraise Tagada'];

handleResultCallback is given as argument, and our function *calls it back* with the data 2 seconds later
const fetchCandiesFromDatabase = (handleResultCallback) => {
  setTimeout(() => {
    handleResultCallback(CANDIES_DB);
  }, 2000);
}

const handleResult = (result) => {
  console.log(result)
}

fetchCandiesFromDatabase(handleResult)

// 2 using readline-sync gem

const readline = require('readline-sync');
const name = readline.question('Enter your name: ');

console.log(`Your name is ${name}`)


// //v 2 using readline gem
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what is your name ", (answer) => {
  console.log(`Your name is ${answer}`);

  rl.close();
});

//v 2 using readline gem - debugging exercise solution

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your favourite color? ", (answer) => {
  console.log(`Your favourite colour is ${answer}`);

  rl.close();
})