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

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});
