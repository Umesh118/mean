var express = require("express");
var router = express.Router();
var User = require("../models/registerUser");
var jwt = require("jsonwebtoken");

// retrieving Logins
router.post("/", (req, res) => {
  let userData = req.body;
  let user = new User(userData);

  user.save((err, registeredUser) => {
    if (err) {
      console.log(err);
    } else {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});

// // add Login
// router.post("/login", (req, res) => {
//   let userData = req.body;

//   User.findOne({ email: userData.email }, (err, user) => {
//     if (err) {
//       throw err;
//     } else {
//       if (!user) {
//         res.status(401).send("Invlaid Email");
//       } else {
//         if (user.password != userData.password) {
//           res.status(401).send("Invalid Password");
//         } else {
//           res.status(200).send(user);
//         }
//       }
//     }
//   });
// });

module.exports = router;
