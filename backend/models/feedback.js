const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    feedback: String,
    rating: String,
  },
  {
    collection: "feedback",
  }
);

var Feedback = mongoose.model("Feedback", feedSchema);

module.exports = Feedback;
