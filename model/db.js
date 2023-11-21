const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/UserData")
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Email should not be Blank"],
  },
  password: {
    type: String,
    require: [true, "Password shouldnot be Blank"],
  },
});


const User = mongoose.model("user", userSchema);

module.exports = User;
