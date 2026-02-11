const fs = require("fs");

const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous will block the main thhread 
// and also V8 engine will offload to the libuv and it will wait for the response 
// and then it will execute the next line of code.
// you can also place anywhere like above making an api call or setimeout or fs.readFile 
// where ever you want to block the main thread and wait for the response and then execute the next line of code.

fs.readFileSync("./file.txt", "utf8"); // 100ms 
console.log("This will only execute after the file read");

// Making an API call 

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data : ", data);
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);