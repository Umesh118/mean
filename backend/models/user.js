const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "user",
  }
);

var User = mongoose.model("User", loginSchema);

module.exports = User;
