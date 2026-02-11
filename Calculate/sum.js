// Modules protects their variables and functions from leaking by default

console.log("Sum Module Executed"); 

var x = "Hello World";


function calculateSum(a, b) {
    const sum = a + b;

    console.log(sum);

}

// // For single export
module.exports = { calculateSum };

// // For Multiple export
// module.exports = {
//     x: x,
//     calculateSum: calculateSum

// }

// For Destructuring
// module.exports = { x, calculateSum };

// module.exports is an empty object
// check
// console.log(module.exports);

// Most of the dev. also write like this becoz module.exports is an empty object
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;