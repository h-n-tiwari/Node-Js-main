import express from "express";
import { connectDB } from "./config/database.js";
import { User } from "./models/user.js";
// Import for (Why do we need MiddleWare)
import { adminAuth } from "../middleware/auth.js";

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

// // Advanced Routing Concepts

// app.get("/abc", (req, res) => {
//     res.send({ firstName: "James", lastName: "Roy" });
// });

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

// // Route Handler can also be wrap inside []
// app.use("/user", [(req, res, next) => {
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
// }]);

// ----------------------------------------------------------------------------

// // Route Handler can also mix and match
// // Suppose u want to wrap only R1, R2 inside [] (Array)
// app.use("/user", [(req, res, next) => {
//     // Route Handler
//     console.log("Handling the route user!!");
//     // res.send("Route Handler 1");
//     next();
// }, (req, res, next) => {
//     // Route Handler 2
//     console.log("Handling the route user 2!!");
//     // res.send("Route Handler 2");
//     next();
// }], (req, res, next) => {
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

// Another way of defining a Route

// app.get("/user", (req, res, next) => {
//     // Route Handler
//     console.log("Handling the route user!!");
//     next();
// });

// app.get("/user", (req, res, next) => {
//     // Route Handler 2
//     console.log("Handling the route user2!!");
//     res.send("Route Handler 2");
// });

// ----------------------------------------------------------------------------

// Why do we need MiddleWare

// Handle Auth MiddleWare for all GET, POST, ...requests

// app.use("/admin", adminAuth);

// app.get("/admin/getAllData", (req, res) => {
//     res.send("All Data Send!!");

// });

// app.get("/admin/deleteUser", (req, res) => {
//     res.send("Deleted a user");
// });

// ---------------------------------------------------------------------------------------

// // ERROR HANDLING

// // This is not the right way
// app.get("/getUserData", (req, res) => {
//     // Logic of DB call and get user data

//     throw new Error("ghdfuyjhgv");
//     res.send("User Data Sent");
// });

// // The right way
// app.use("/", (err, req, res, next) => {
//     if (err) {
//         res.status(500).send("Something Went Wrong");
//     }
// });

// // Use Try and Catch
// app.get("/getUserData", (req, res) => {
//     try {
//         // Logic of DB call and get user data

//         throw new Error("ghdfuyjhgv");
//         res.send("User Data Sent");
//     } catch (err) {
//         res.status(500).send("Some error contact support team");
//     }
// });

// ---------------------------------------------------------------------------------------------------
// // Try to play with it
// // ERROR HANDLING

// // This is not the right way
// app.get("/getUserData", (req, res) => {
//     // Logic of DB call and get user data

//     throw new Error("ghdfuyjhgv");
//     res.send("User Data Sent");
// });

// // The right way
// app.use("/", (err, req, res, next) => {
//     if (err) {
//         res.status(500).send("Something Went Wrong");
//     }
// });

// // Use Try and Catch
// app.get("/getUserData", (req, res) => {
//     try {
//         // Logic of DB call and get user data

//         throw new Error("ghdfuyjhgv");
//         res.send("User Data Sent");
//     } catch (err) {
//         res.status(500).send("Some error contact support team");
//     }
// });

// -------------------------------------------------------------------------------------

// // Config => Database

// connectDB()
//     .then(() => {
//         console.log("Database is successfully connected...");
//         app.listen(7777, () => {
//             console.log("Server is successfully listening on port 7777...");
//         });
//     })
//     .catch((err) => {
//         console.log("Database cann't be connected...");
//     });

// -------------------------------------------------------------------------------------

// app.post("/signup", async (req, res) => {
//     const userObj = {
//         first_name: "James",
//         last_name: "Roy",
//         email: "jamesroy0978@gmail.com",
//         password: "7459rw7r9",
//         gender: "Male",
//         age: 21,
//         city: "LA",
//     };

//     const user = new User(userObj);
//     await user.save();

//     // u can also write like this
//     // const user = new User({
//     //     first_name: "James",
//     //     last_name: "Roy",
//     //     email: "jamesroy0978@gmail.com",
//     //     password: "7459rw7r9",
//     //     gender: "Male",
//     //     age: 21,
//     //     city: "LA",
//     // }

//     // })

//     try {
//         await user.save();
//         res.send("User Added Successfully!!");
//     } catch (err) {
//         res.status(400).send("Error saving the user:" + err.message);
//     }
// });

// connectDB()
//     .then(() => {
//         console.log("Database is successfully connected...");
//         app.listen(7777, () => {
//             console.log("Server is successfully listening on port 7777...");
//         });
//     })
//     .catch((err) => {
//         console.log("Database cann't be connected...");
//     });


// -------------------------------------------------------------------------------------

// app.post("/signup", async (req, res) => {
//     const userObj = {
//         first_name: "James",
//         last_name: "Roy",
//         email: "jamesroy0978@gmail.com",
//         password: "7459rw7r9",
//         gender: "Male",
//         age: 21,
//         city: "LA",
//     };

//     const user = new User(userObj);
//     await user.save();

//     // u can also write like this
//     // const user = new User({
//     //     first_name: "James",
//     //     last_name: "Roy",
//     //     email: "jamesroy0978@gmail.com",
//     //     password: "7459rw7r9",
//     //     gender: "Male",
//     //     age: 21,
//     //     city: "LA",
//     // }

//     // })

//     try {
//         await user.save();
//         res.send("User Added Successfully!!");
//     } catch (err) {
//         res.status(400).send("Error saving the user:" + err.message);
//     }
// });


// // Get user by email

// // app.get("/user", async (req, res) => {
// //     const userEmail = req.body.emailId;

// //     try {
// //         const users = await User.find({emailId: userEmail});

// //         res.send(user);
// //     } catch (err) {
// //         res.status(400).send("Something went wrong");
// //     }

// // });

// // u can also use if else

// app.get("/user", async (req, res) => {
//     const userEmail = req.body.emailId;

//     try {
//         const users = await User.find({ emailId: userEmail });

//         if (users.length === 0) {
//             res.status(404).send("User not found");
//         } else {
//             res.send(users);

//         }

//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }
// });

// // Feed API - GET /feed - get all the users from the database
// app.get("/feed", async (req, res) => {

//     try {
//         const users = await User.find({});
//         res.send(users);
//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }


// })

// connectDB()
//     .then(() => {
//         console.log("Database is successfully connected...");
//         app.listen(7777, () => {
//             console.log("Server is successfully listening on port 7777...");
//         });
//     })
//     .catch((err) => {
//         console.log("Database cann't be connected...");
//     });


// -------------------------------------------------------------------------------------

// app.post("/signup", async (req, res) => {
//     const userObj = {
//         first_name: "James",
//         last_name: "Roy",
//         email: "jamesroy0978@gmail.com",
//         password: "7459rw7r9",
//         gender: "Male",
//         age: 21,
//         city: "LA",
//     };

//     const user = new User(userObj);
//     await user.save();

//     // u can also write like this
//     // const user = new User({
//     //     first_name: "James",
//     //     last_name: "Roy",
//     //     email: "jamesroy0978@gmail.com",
//     //     password: "7459rw7r9",
//     //     gender: "Male",
//     //     age: 21,
//     //     city: "LA",
//     // }

//     // })

//     try {
//         await user.save();
//         res.send("User Added Successfully!!");
//     } catch (err) {
//         res.status(400).send("Error saving the user:" + err.message);
//     }
// });


// // Get user by email

// // app.get("/user", async (req, res) => {
// //     const userEmail = req.body.emailId;

// //     try {
// //         const users = await User.find({emailId: userEmail});

// //         res.send(user);
// //     } catch (err) {
// //         res.status(400).send("Something went wrong");
// //     }

// // });

// // u can also use if else

//     // Get user by email if there is same email by using Model.findOne()

// app.get("/user", async (req, res) => {
//     const userEmail = req.body.emailId;

//     try {
//         const users = await User.find({ emailId: userEmail });
//         if (!users) {
//             res.status(404).send("User not found");
//         } else {
//         res.send(users);
//         }
//         // const users = await User.find({ emailId: userEmail });
//         // if (users.length === 0) {
//         //     res.status(404).send("User not found");
//         // } else {
//         //     res.send(users);
//         // }
//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }
// });

// // Feed API - GET /feed - get all the users from the database
// app.get("/feed", async (req, res) => {

//     try {
//         const users = await User.find({});
//         res.send(users);
//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }


// })

// connectDB()
//     .then(() => {
//         console.log("Database is successfully connected...");
//         app.listen(7777, () => {
//             console.log("Server is successfully listening on port 7777...");
//         });
//     })
//     .catch((err) => {
//         console.log("Database cann't be connected...");
//     });


// -------------------------------------------------------------------------------------

// app.post("/signup", async (req, res) => {
//     const userObj = {
//         first_name: "James",
//         last_name: "Roy",
//         email: "jamesroy0978@gmail.com",
//         password: "7459rw7r9",
//         gender: "Male",
//         age: 21,
//         city: "LA",
//     };

//     const user = new User(userObj);
//     await user.save();

//     // u can also write like this
//     // const user = new User({
//     //     first_name: "James",
//     //     last_name: "Roy",
//     //     email: "jamesroy0978@gmail.com",
//     //     password: "7459rw7r9",
//     //     gender: "Male",
//     //     age: 21,
//     //     city: "LA",
//     // }

//     // })

//     try {
//         await user.save();
//         res.send("User Added Successfully!!");
//     } catch (err) {
//         res.status(400).send("Error saving the user:" + err.message);
//     }
// });


// // Get user by email

// // app.get("/user", async (req, res) => {
// //     const userEmail = req.body.emailId;

// //     try {
// //         const users = await User.find({emailId: userEmail});

// //         res.send(user);
// //     } catch (err) {
// //         res.status(400).send("Something went wrong");
// //     }

// // });

// // u can also use if else

//     // Get user by email if there is same email by using Model.findOne()

// app.get("/user", async (req, res) => {
//     const userEmail = req.body.emailId;

//     try {
//         const users = await User.find({});
//         if (!users) {
//             res.status(404).send("User not found");
//         } else {
//         res.send(users);
//         }
//         // const users = await User.find({ emailId: userEmail });
//         // if (users.length === 0) {
//         //     res.status(404).send("User not found");
//         // } else {
//         //     res.send(users);
//         // }
//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }
// });

// // Feed API - GET /feed - get all the users from the database
// app.get("/feed", async (req, res) => {

//     try {
//         const users = await User.find({});
//         res.send(users);
//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }


// })

// // Delete
// app.delete("/user", async (req, res) => {
//     const userId = req.body.userId;

//     try {
//         // const user = await User.findByIdAndDelete({ _id: userId });
//         const user = await User.findByIdAndDelete(userId);

//         res.send("User deleted successfully");


//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }

// };

// connectDB()
//     .then(() => {
//         console.log("Database is successfully connected...");
//         app.listen(7777, () => {
//             console.log("Server is successfully listening on port 7777...");
//         });
//     })
//     .catch((err) => {
//         console.log("Database cann't be connected...");
//     });


// -------------------------------------------------------------------------------------

app.post("/signup", async (req, res) => {
    const userObj = {
        first_name: "James",
        last_name: "Roy",
        email: "jamesroy0978@gmail.com",
        password: "7459rw7r9",
        gender: "Male",
        age: 21,
        city: "LA",
    };

    const user = new User(userObj);
    await user.save();

    // u can also write like this
    // const user = new User({
    //     first_name: "James",
    //     last_name: "Roy",
    //     email: "jamesroy0978@gmail.com",
    //     password: "7459rw7r9",
    //     gender: "Male",
    //     age: 21,
    //     city: "LA",
    // }

    // })

    try {
        await user.save();
        res.send("User Added Successfully!!");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
});


// Get user by email

// app.get("/user", async (req, res) => {
//     const userEmail = req.body.emailId;

//     try {
//         const users = await User.find({emailId: userEmail});

//         res.send(user);
//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }

// });

// u can also use if else

    // Get user by email if there is same email by using Model.findOne()

app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;

    try {
        const users = await User.find({});
        if (!users) {
            res.status(404).send("User not found");
        } else {
        res.send(users);
        }
        // const users = await User.find({ emailId: userEmail });
        // if (users.length === 0) {
        //     res.status(404).send("User not found");
        // } else {
        //     res.send(users);
        // }
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send("Something went wrong");
    }


})

// Delete
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;

    try {
        // const user = await User.findByIdAndDelete({ _id: userId });
        const user = await User.findByIdAndDelete(userId);

        res.send("User deleted successfully");


    } catch (err) {
        res.status(400).send("Something went wrong");
    }

})


// Update data of the user




connectDB()
    .then(() => {
        console.log("Database is successfully connected...");
        app.listen(7777, () => {
            console.log("Server is successfully listening on port 7777...");
        });
    })
    .catch((err) => {
        console.log("Database cann't be connected...");
    });



