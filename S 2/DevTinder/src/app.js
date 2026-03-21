const express = require("express");

const app = express();

// app.use("/hello/2", (req, res) => {
//     res.send("Konnichiwa from the Server!");
// });

// app.use("/hello", (req, res) => {
//     res.send("Hello from the Server!");
// });

// app.use("/test", (req, res) => {
//     res.send("Test from the server!");
// });

// app.use("/", (req, res) => {
//     res.send("Hola!");
// });

// --------------------------------------------------------------------------------

// // get will only handle GET call to /user
// app.get("/user", (req, res) => {
//     res.send({ firstName: "James", lastName: "Roy" });
// });

// app.post("/user", (req, res) => {
//     console.log("Save Data to the Database");
//     // Saving Data to DB
//     res.send("Data successfully saved to the Database!");
// });

// app.delete("/user", (req, res) => {
//     res.send("Deleted successfully!");
// });

// // use will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//     res.send("Test from the server!");
// });

// ----------------------------------------------------------------------------------

// Advanced Routing Concepts

app.get("/abc", (req, res) => {
    res.send({ firstName: "James", lastName: "Roy" });
});

// // Empty Route
// app.use("/user", (req, res) => {
//     // Route Handler
//     // res.send("Route Handler 1");  
//     console.log("Handling the route user!!");             
// })

// ----------------------------------------------------------------------------

// // One Route can also have Multiple Route Handler
// app.use("/user", (req, res, next) => {
//     // Route Handler
//     console.log("Handling the route user!!");             
//     // res.send("Route Handler 1");  
//     next();
// }, (req, res, next) => {
//     // Route Handler 2
//     console.log("Handling the route user 2!!");             
//     // res.send("Route Handler 2");
//     next();  
// }, (req, res, next) => {
//     // Route Handler 3
//     console.log("Handling the route user 3!!");             
//     // res.send("Route Handler 3");  
//     next();
// }, (req, res, next) => {
//     // Route Handler 4
//     console.log("Handling the route user 4!!");             
//     // res.send("Route Handler 4");  
//     next();
// }, (req, res, next) => {
//     // Route Handler 5
//     console.log("Handling the route user 5!!");             
//     // res.send("Route Handler 5");  
//     next();
// }, (req, res, next) => {
//     // Route Handler 6
//     console.log("Handling the route user 6!!");             
//     res.send("Route Handler 6");  
// });

// ----------------------------------------------------------------------------

// Route Handler can also be wrap inside []
app.use("/user", [(req, res, next) => {
    // Route Handler
    console.log("Handling the route user!!");             
    // res.send("Route Handler 1");  
    next();
}, (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route user 2!!");             
    // res.send("Route Handler 2");
    next();  
}, (req, res, next) => {
    // Route Handler 3
    console.log("Handling the route user 3!!");             
    // res.send("Route Handler 3");  
    next();
}, (req, res, next) => {
    // Route Handler 4
    console.log("Handling the route user 4!!");             
    // res.send("Route Handler 4");  
    next();
}, (req, res, next) => {
    // Route Handler 5
    console.log("Handling the route user 5!!");             
    // res.send("Route Handler 5");  
    next();
}, (req, res, next) => {
    // Route Handler 6
    console.log("Handling the route user 6!!");             
    res.send("Route Handler 6");  
}]);

// ----------------------------------------------------------------------------

// Route Handler can also mix and match 
// Suppose u want to wrap only R1, R2 inside [] (Array)
app.use("/user", [(req, res, next) => {
    // Route Handler
    console.log("Handling the route user!!");             
    // res.send("Route Handler 1");  
    next();
}, (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route user 2!!");             
    // res.send("Route Handler 2");
    next();  
}], (req, res, next) => {
    // Route Handler 3
    console.log("Handling the route user 3!!");             
    // res.send("Route Handler 3");  
    next();
}, (req, res, next) => {
    // Route Handler 4
    console.log("Handling the route user 4!!");             
    // res.send("Route Handler 4");  
    next();
}, (req, res, next) => {
    // Route Handler 5
    console.log("Handling the route user 5!!");             
    // res.send("Route Handler 5");  
    next();
}, (req, res, next) => {
    // Route Handler 6
    console.log("Handling the route user 6!!");             
    res.send("Route Handler 6");  
});




app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});
