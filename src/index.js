  // Import the 'express' module
const express = require("express");

const app = require("./app.js");

// Import the 'mongoose' module
const mongoose = require("mongoose");

// Define the port number for the server
const PORT =  process.env.PORT || 3000;

// Enable JSON parsing in the express app
app.use(express.json());

//Enable URL encoded data parsing in the express app
app.use(express.urlencoded({ extended: false }));

// Define the URL for the MongoDB database
const DATABASE_URL = "mongodb+srv://gauravyadava963998:9639981108@cluster0.yj6gutd.mongodb.net/?retryWrites=true&w=majority";

// Connect to the MongoDB database
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
// Get a reference to the MongoDB connection in database var..
const database = mongoose.connection;

// Log any errors that occur with the database connection.
database.on("error", (err) => console.log(err));
// success message of login when the database connection is established.
database.once("open", () => console.log("Database connected"));

// Start the server and listen for incoming requests on the specified port.
app.listen(PORT, () => console.log(`App Listening on the port ${PORT}!`));
 