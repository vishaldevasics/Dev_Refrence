const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vishaldevasics:O2M6LApy2T3RPN7a@cluster0.df27u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const user = new User({
  name: "Jay",
  username: "JayParkash",
  password: "12343223",
});

user.save();