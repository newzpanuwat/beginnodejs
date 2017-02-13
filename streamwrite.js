var fs = require('fs');
var data = 'newzpanwat tutorial Node JS';

var writerStream = fs.createWriteStream('./Project/output.txt');
writerStream.write(data,'utf-8');
writerStream.end();
writerStream.on('finish',function () {
  console.log("Output finish!!");
})
