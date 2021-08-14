var fs = require("fs");

var greet = fs.readFileSync(__dirname + "/greet.txt", "utf-8");
console.log(greet);
