//Syncronous Blocking I/O

var fs = require('fs');
var data = fs.readFileSync('output.txt');

console.log(data.toString());
console.log('Do other things');

//Asyncronous Non-Blocking I/O
var fs = require('fs');
fs.readFile('output.txt', function(err, data) {
  console.log(data.toString());
});
console.log('Do other things');

2-3//Javascript: First-class function
//variable can be a function

var say = function myName() {
  console.log("ping");
}

say();

//can send the function to be argument of a another  function

function say(what) {
  what()
}
say(myName);

//function can return from another function
function say() {
  return function myName() {
    console.log("Ping");

  }

}
var nameFn = say();
nameFn();


2-4//Closure
