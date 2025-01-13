const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectDB = async () => {
  mongoose
    .connect(MONGODB_URI)
    .then((res) => console.log("> Connected..."))
    .catch((err) =>
      console.log(`> Error while connecting to mongoDB : ${err.message}`)
    );
};

module.exports = connectDB;
