// Importing the Mongoose library
const mongoose = require("mongoose");

// Importing the Subscriber model from models ->> subscribers
const subscriberModel = require("./models/subscribers");
 
// Importing the data for seeding the database
const data = require("./data"); 

// // The URL of the DATABASES that We will be Connecting To.
const DATABASE_URL = "mongodb+srv://gauravyadava963998:9639981108@cluster0.yj6gutd.mongodb.net/?retryWrites=true&w=majority";

// Connecting to the database using the Mongoose connect() method, and passing in the DATABASE_URL as well as some options to avoid deprecation warnings.
mongoose.connect(DATABASE_URL, {
  // Use the new MongoDB driver for parsing connection strings
  useNewUrlParser: true,
  
  // Use the new MongoDB driver for monitoring server topology
  useUnifiedTopology: true,
});

// Storing the database connection object in a variable for easy reference.
const dataBase = mongoose.connection; 

// Logging an error message if there's an error in the database connection.
dataBase.on("error", (err) => console.log(err));

// Logging a success message once the database connection is established.
dataBase.once("open", () => console.log("Database created..."));

const refreshAll = async () => {

  // Deleting all existing data from the Subscriber model using the deleteMany() method.
  await subscriberModel.deleteMany({});

  // Seeding the Subscriber model with data using the insertMany() method.
  await subscriberModel.insertMany(data);

  // Disconnecting from the database using the disconnect() method.
  await mongoose.disconnect();
};

// Calling the refreshAll() function to seed the database with the data. 
refreshAll();
