var express = require("express");
var router = express.Router();
var Feedback = require("../models/feedback");

// retrieving feedbacks
router.get("/", (req, res) => {
  Feedback.find((err, feedback) => {
    res.json(feedback);
  });
});

// add feedback
router.post("/", (req, res) => {
  let newFeedback = new Feedback({
    feedback: req.body.feedback,
    rating: req.body.rating,
  });

  newFeedback.save((err, feedback) => {
    if (err) {
      // res.json({ msg: "Failed to add contact" });
      throw err;
    } else {
      res.json({ msg: "Feedback added succesfully" });
    }
  });
});

module.exports = router;
