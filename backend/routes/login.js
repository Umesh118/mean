var express = require("express");
var router = express.Router();
var Login = require("../models/login");
var User = require("../models/registerUser");
var jwt = require("jsonwebtoken");

// verifying logins

// retrieving Logins
router.post("/", (req, res) => {
  let userData = req.body;
  // let user = new Login(userData);

  //   user.save((err, registeredUser) => {
  //     if (err) {
  //       throw err;
  //     } else {
  //       res.status(200).send(registeredUser);
  //     }
  //   });

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      throw err;
    } else {
      if (!user) {
        res.status(401).send("Invalid Email");
      } else {
        if (userData.password != user.password) {
          res.status(401).send("Invalid password");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
    }
  });
});

module.exports = router;
