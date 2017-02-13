var http = require('http');
var fs = require('fs');

/*JSON
var myUser = {
  "name":"Panuwat",
  "job":"Programmer",
  "age":80
}

*/

// createServer and send txt Hello world!
http.createServer(function(req,res) {

  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200,{'Content-Type':'text/html'});
    var myStream = fs.createReadStream(__dirname+"/"+'index.html','utf-8');
    myStream.pipe(res);

  }
  if (req.url === '/youtube') {
    res.writeHead(200,{'Content-Type':'text/html'});
    var myStream = fs.createReadStream(__dirname+"/"+'youtube.html','utf-8');
    myStream.pipe(res);

  }
  if (req.url === '/facebook') {
    res.writeHead(200,{'Content-Type':'text/html'});
    var myStream = fs.createReadStream(__dirname+"/"+'facebook.html','utf-8');
    myStream.pipe(res);

  }else{
      res.writeHead(404,{'Content-Type':'text/html'});
      var myStream = fs.createReadStream(__dirname+"/"+'notfound.html','utf-8');
      myStream.pipe(res);

  }

  //Display JSON
  //res.end(JSON.stringify(myUser));

}).listen(8081,'127.0.0.1');
