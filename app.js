var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser());
app.set('view engine','ejs');

app.get('/showform',function (req,res) {
  res.sendFile(__dirname+"/"+"showform.html");
});
app.post('/showData',function (req,res) {
  data = {
    fname: req.bodyParser.fname,
    lname: req.bodyParser.lname
  };
  console.log(data);
  res.end(JSON.stringify(data));
})

app.listen(8081);
