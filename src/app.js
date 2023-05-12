// import the Express library
const express = require("express");
// import the subscriberModel object from the subscribers.js module
const subscriberModel = require("./models/subscribers.js");

// create a new Express application
const app = express();

// enable JSON parsing for incoming requests
app.use(express.json());


// define a route handler for the root '/' path of the application
app.get("/", async (request, response) => {
  
  response.send('Youtube Subscriber Backend');
});

// define a route handler for the '/subscribers' path of the application
app.get("/subscribers", async (request, response) => {

   // retrieve all documents from the 'subscribers' collection
   let data = await subscriberModel.find();

  // send the retrieved data as the response
  response.send(data);
});


//define a route handler for the '/subscribers/names' path of the application
app.get("/subscribers/names", async (request, response) => {

  // retrieve all documents from the 'subscribers' collection, and select only the 'name' and 'subscribedChannel' fields
  let data = await subscriberModel.find().select("name , subscribedChannel");

  // send the retrieved data as the response
  response.send(data);
});


// define a route handler for the '/subscribers/:_id' path of the application
app.get("/subscribers/:_id", async (request, response) => {

  // retrieve a single document from the 'subscribers' collection with the specified '_id'
  await subscriberModel
  .findById(request.params._id) 
   .then((userData) => {

      // if no document was found with the specified '_id', send an error response
    if (!userData) {
      response.status(400).send({
        message: Error(`The request has failed with a 400 status code, indicating that the user with the provided _id does not exist.:${request.params._id}, Please check your Id`).message
      });
    } 
    // if a document was found, send it as the response
    else {
      response.send(userData);
    }
  })

  // if an error occurred during the database query, send an error response
  .catch(() => {
    response.status(400).json({
      message: `Sorry 400 Bad request, due to incorrect syntax... Please check your given _id: ${request.params._id}`,
    });
  });
});

// define a catch-all route handler for any requests that don't match the defined routes
app.use((request,response)=>{
  response.status(404).send({errorMessage:'Error status code: 404 - Page Not Found, Due to Invalid Route Action'})
})
// export the Express application object for use in other parts of the application
module.exports = app;
