// Instantiating Express
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Middleware
app.use(express.json());

//route import and mount
const auth = require("./routes/auth");
app.use("/api/V1", auth);

//connecting database
require("./config/database").connect();

app.listen(PORT, () => {
  console.log(`App started at ${PORT}`);
});
