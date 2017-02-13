var pi=3.14;

var obj = {};
obj.updateData = function(){
  console.log('Updating Data');
}

obj.deleteUser = function(){
  console.log('Deleting User');
}




var update = function(){
  return "Updating server";
}

var add = function(a,b){
  return a+b;
}

exports.pi = pi;
exports.add = add;
exports.update = update;
exports.data = obj;
