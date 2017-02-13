var fs = require('fs');
var data ='';
var readStream = fs.createReadStream('code.txt');
readStream.setEncoding('utf-8');
readStream.on('data',function(txt) {
  data+=txt;
})

readStream.on('end',function () {
  console.log(data);
})

readStream.on('error',function (err) {
  console.log(err.stack);
})
