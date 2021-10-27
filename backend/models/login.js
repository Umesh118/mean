const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "login",
  }
);

var Login = mongoose.model("Login", loginSchema);

module.exports = Login;
