const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection is Successful"))
    .catch((error) => {
      console.log("DB Facing Connection Issues");
      console.error(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
