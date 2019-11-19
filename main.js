const reader = require('readline-sync');
const util = require("./converter.js");
let n = reader.questionInt("Please Insert your number = ");
console.log("The Binary form of your number is " + util.convertToBinary(n))
console.log("The Hexadecimal form of your number is " + util.convertToHexa(n))