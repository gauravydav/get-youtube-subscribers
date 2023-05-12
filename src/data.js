//User data is stored in the database in the form of an array of objects.
const data = [
    {
      "name": "Gaurav",
      "subscribedChannel": "Almabetter"
    },
    {
      "name": "SHIVAM",
      "subscribedChannel": "T-Series"
    },
    {
      "name": "Gulshan",
      "subscribedChannel": "Cocomelon"
    },
    {
      "name": "Khushi",
      "subscribedChannel": "Zee-Tv"
    },
    {
      "name": "Abhay",
      "subscribedChannel": "Colors-TV"
    },
    {
      "name": "Aryan",
      "subscribedChannel": "Shemaroo Entertainment"
    },
    {
      "name": "Suresh",
      "subscribedChannel": "MrBeast"
    },
    {
      "name": "khemchandra",
      "subscribedChannel": "Sony SAB"
    }
  ]
 
module.exports = data;

// The 'data' array is an array of objects that stores user data.
// Each object in the array represents a user and contains two properties: 'name' and 'subscribedChannel'.
// The 'name' property is a string that represents the user's name.
// The 'subscribedChannel' property is also a string that represents the channel the user is subscribed to.
// The 'module.exports' is used to make the 'data' array available to other parts of the code that require it.