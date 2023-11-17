const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();

// Use the PORT environment variable or default to 3000
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes
const blog = require("./routes/blog");

//mount the blog routes
app.use("/api/V1", blog);

//connect to the database using DATABASE_URL
const dbConnect = require("./config/database");
dbConnect();

//start the server
app.listen(PORT, () => {
  console.log(`App started successfully on port ${PORT}`);
});

//default Route
app.get("/", (req, res) => {
  res.send(`<h1>This is Homepage</h1>`);
});
