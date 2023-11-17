const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//start server
app.listen(PORT, () => {
    console.log(`App started successfully on port ${PORT}`);
})

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todo")

//mount the todo API route
app.use("/api/V1", todoRoutes);

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage</h1>`)
})