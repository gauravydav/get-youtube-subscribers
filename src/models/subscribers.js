
// import the Mongoose library
const mongoose = require('mongoose');

// define the schema for the 'subscribers' collection
const susbcriberSchema = new mongoose.Schema({
   
    // define a required 'name' field of type String
    name: {
        type: String,
        required: true,
    },
    // define a required 'subscribedChannel' field of type String
    subscribedChannel:{
        type: String,
        required: true,
    },
    // define a required 'subscribedDate' field of type Date with a default value of the current date
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})
// export the model based on the schema, with the name 'Subscriber'
module.exports = mongoose.model('Subscriber',susbcriberSchema);