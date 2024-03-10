const mongoose = require("mongoose");
exports.ConnectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Sukraj:Github123@cluster0.bze4xkc.mongodb.net/"
    );
    console.log("Database connect succcessfully");
  } catch (error) {
    console.log(error.message)
  }
};
