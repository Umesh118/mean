const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    phone: String,
  },
  {
    collection: "users",
  }
);

var Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
