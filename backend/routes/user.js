// var express = require("express");
// var router = express.Router();
// var User = require("../models/user");
// var jwt = require("jsonwebtoken");

// // retrieving Logins
// router.post("/register", (req, res) => {
//   let userData = req.body;
//   let user = new User(userData);

//   user.save((err, registeredUser) => {
//     if (err) {
//       throw err;
//     } else {
//       res.status(200).send(registeredUser);
//     }
//   });
// });

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

// module.exports = router;
