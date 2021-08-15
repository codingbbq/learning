var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/data/greet.txt", "utf-8");

var writable = fs.createWriteStream(__dirname + "/data/greetcopy.txt");

readable.pipe(writable);
