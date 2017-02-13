var buff = new Buffer(7);

var len = buff.write("PANUWAT");

console.log(len);
console.log(buff.toString());


var buf = new Buffer(26);
for (var i=0;i<26;i++){
  buf[i] = i+97;
}

console.log(buf.toString('ascii'));


//-------------------------

var buff = new Buffer("newpanuwat");
var buff2 = new Buffer("boonrod");
var buff3 = Buffer.concat([buff,buff2]);

var json = buff3.toJSON(buff3);

console.log(json);
console.log(buff3.toString());
