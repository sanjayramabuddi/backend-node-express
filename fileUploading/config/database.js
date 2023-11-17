const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("App connected with database"))
    .catch((error) => {
      console.log("DB not Connected");
      console.error(error);
      process.exit(1);
    });
};
