var express = require('express');
var routing = express();

routing.get('/',function (req,res) {
    res.send("<h1>Helo User!</h1>");
});
routing.get('/user/profile/:id',function (req,res) {
    res.send("<h1>Node JS Tutorial by "+req.params.id+"</h1>");
});
routing.listen(8000);
