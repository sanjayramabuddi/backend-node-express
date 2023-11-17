//app create
const express = require("express");
const app = express();

//getting PORT from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
//fileUpload middleware
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//connect with db
const database = require("./config/database");
database.connect();

//connect with cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//mounting api route
const upload = require("./routes/uploading");
app.use("/api/v1/upload", upload);

//activate server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
