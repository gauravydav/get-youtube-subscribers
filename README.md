This project, called "Almabetter Backend Capstone Project - Get YouTube Subscribers," is a backend application developed using Node.js, Express.js, and MongoDB as the database. Its purpose is to retrieve subscriber data from the database based on specified conditions. The project can be set up and tested using the following steps:

1. Clone or download the project files and open them in a code editor like Visual Studio Code.
2. Install the necessary dependencies by running the command "npm install" in the terminal of Visual Studio Code.
3. Start the backend server by running the command "node src/index.js" in the terminal.
4. Create a new cluster on MongoDB Cloud and replace the "DATABASE_URL" in the project files with the URL of your new cluster.
5. Run the command "node src/createDatabase.js" in the terminal to populate the database with static data.

The project provides several HTTP GET endpoints to retrieve subscriber data from the database:

- "GET http://localhost:3000/" is the home page endpoint that displays a welcome message to the client.
- "GET http://localhost:3000/subscribers" returns all subscriber data from the MongoDB Cloud database in the form of an object array or JSON format.
- "GET http://localhost:3000/subscribers/names" retrieves only the name and subscribedChannel data from the "subscribers" collection in the database, based on specified conditions.
- "GET http://localhost:3000/subscribers/:_id" allows clients to retrieve subscriber data from the database by matching the provided "_id" parameter with the corresponding ID in the collection. If the ID doesn't match, a "400 Bad Request" error status code is returned.
- "GET http://localhost:3000/anything" serves as a catch-all endpoint for any incorrect routes entered by the client, returning a "404 Page Not Found" error status code.

To deploy this project, the Render platform was used. You can search for Render in Google to find more information about it.

-Author:@gauravydav

-Acknowledgements:-
node.js,
express.js,
mongodb-cloud,
mongoose,
nodemon
