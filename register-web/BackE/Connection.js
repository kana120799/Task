const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1/User", {
      // useFindAndModify: true,
      // useCreateIndex: true,
      // useNewUrlParse: true,
      //useUnifiedTopology:true,
    });
  } catch (err) {
    console.log("Error on Connection =>", err);
  }
};
module.exports = { connection };
