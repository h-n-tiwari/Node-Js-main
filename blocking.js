const crypto = require("node:crypto");    // also write like this ("node:crypto") crypto is a library all these are node js core modules

console.log("Hello World");

var a = 1078698;
var b = 20986;;

// If i want to block main thread then i will use crypto.pbkdf2Sync()
// Like this
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First Key is generated");

// pbkdf2 = Password Base Key Derivation Function
// this is also manages by libuv and libuv is also registers its callback and once it has generated
// the key it calls the callback it throws the callback into the call stack and it is executed very fast
// This is an Async Function

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated");
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
