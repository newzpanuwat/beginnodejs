
//readFile system
var fs = require('fs');


//readfile
var readMe = fs.readFileSync('code.txt', 'utf-8');
console.log(readMe);


//writefile to readMe
fs.writeFileSync('HelloNodejs.txt',readMe);

//create Directory
//then callback function for put file into Directory "Project"

fs.mkdir('Project',function() {
   fs.writeFileSync('./Project/Readme.txt',readMe);
});
