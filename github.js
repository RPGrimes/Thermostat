const got = require('got');

const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);


//simple example

// const stringValue = '{ "name": "John" }';
// const objectValue = JSON.parse(stringValue);

// console.log(objectValue.name);

//WRAPPING INSIDE A FUNCTION

const got = require('got');

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    callback(response);
  });
}
