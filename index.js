var yaml = require('yaml-front-matter'),
	fs = require('fs'),
	util = require('util');


var md = fs.readFileSync('index.md').toString();
//console.log("------------------")
//console.log("Original:")
//console.log(md);


console.log("------------------");
console.log("Results:");

var results = yaml.loadFront( md );
console.log( results );

console.log("------------------");
console.log(results.text);