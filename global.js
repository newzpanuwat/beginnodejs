console.log(__filename);
console.log(__dirname);

function printhello(){
  console.log("Hello world");
}


//SET TIMEOUT WHEN YOU WANT TO DELAY FOR DISPLAY FUNCTION
vat T = setTimeout(printhello,2000);

clearTimeout(T);

// WORKING WITH TIME SETTING
setInterval(printhello,2000);
