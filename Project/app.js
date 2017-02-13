//export ,require 

var response = require('./method.js');
console.log(response.update());
console.log(response.add(2,3));

console.log(response.data);
response.data.deleteUser();
