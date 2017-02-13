var fs = require('fs');
var reader = fs.createReadStream('code.txt');
var writer = fs.createWriteStream('file1.txt');

reader.pipe(writer);
