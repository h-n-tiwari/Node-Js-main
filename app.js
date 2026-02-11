require("./xyz.js");       // one module into another

// const calculateSum = require("./Calculate/sum.js");

// -------------------

// Destructuring = instead of obj u can also write variables, and functions

// const { x, calculatSum } = require("./sum.js");

// -------------------

// const { calculateMultiply } = require("./Calculate/multiply.js");              // nested module for single

const { calculateMultiply, calculateSum } = require("./Calculate/index");

// -------------------

// importing json file

const data = require("./data.json");


// ------------------------------

var name = "Namaste NodeJS";

var a = 10;

var b = 20;

// -----------------------

calculateSum(a, b);
// console.log(obj.x);

// --------------------------------

// Destructing -

// calculatSum(a, b);
// console.log(x);

// ----------------------------------


// console.log(name);
// console.log(a + b);

// console.log(global);

// console.log(this);    // Empty object   
// console.log(globalThis === global);

// -------------------------------------------

// nested module

calculateMultiply(a, b);

// -------------------------------------------

// json file

console.log(JSON.stringify(data));

// you can also write like this

console.log(data);