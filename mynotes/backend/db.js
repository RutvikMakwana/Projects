const mongoose = require("mongoose");

// MongoDB URI
const mongoURI = "mongodb://localhost:27017/mynotes";

// Function to connect to MongoDB
async function connectToMongo() {
  // Use async/await to handle asynchronous operation
  await mongoose
    .connect(mongoURI) // Connect to MongoDB using the provided URI
    .then(() => console.log("Connected to Mongo Successfully")) // If connection is successful, log success message
    .catch((err) => console.log(err)); // If an error occurs during connection, log the error
}

// Export the connectToMongo function to make it accessible from other modules
module.exports = connectToMongo;
