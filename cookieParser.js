var express = require('express')
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.set('view engine','ejs');

app.get('/createCookie',function (req,res){
  res.cookie('myCookie','NewPanuwat');
  res.end("Create Cookie");
});

app.get('/delCookie',function (req,res) {
  res.clearCookie('myCookie');
  res.end('Delete Cookie complete')

});


app.listen(8081);
