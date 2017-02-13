var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/',function (req,res) {
  var data = {
    name:"Panuwat Boonrod",
    age:15,
    job:"Programmer",

  }
  res.render('profile',{user:data});

})

app.get('/contact', function(req,res) {
    res.render('contact');
});
app.get('/database', function(req,res) {
    res.render('database');
});


app.listen(8000);
