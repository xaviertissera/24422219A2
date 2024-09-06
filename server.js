// Import the Express framework for building the web server
var express = require("express");
var app = express();

// Import the API controller (concertAPI) from the 'controllerAPI/api-controller' file
var concertAPI = require('./controllerAPI/api-controller');

// Define a route for the '/api/concertsx' endpoint and attach the concertAPI as a middleware
// All requests to '/api/concertsx' will be handled by the concertAPI module
app.use("/api/concertsx", concertAPI);

// Start the server
app.listen(3060);

console.log("Server running on port 3060");
