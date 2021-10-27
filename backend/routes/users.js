var express = require("express");
var router = express.Router();
var Contact = require("../models/contacts");

// retrieving contacts
router.get("/", (req, res) => {
  Contact.find((err, contacts) => {
    res.json(contacts);
  });
});

// add contacts
router.post("/contact", (req, res) => {
  let contact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
  });
  // contact.first_name = "Umesh";
  // contact.last_name = "Dhangare";
  // contact.phone = "99983479";
  contact.save((err, contact) => {
    if (err) {
      // res.json({ msg: "Failed to add contact" });
      throw err;
    } else {
      res.json({ msg: "Contact added succesfully" });
    }
  });
});

// delete contacts
router.delete("/contact/:id", (req, res, next) => {
  Contact.remove({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
