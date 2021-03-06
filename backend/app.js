var createError = require("http-errors");
var express = require("express");
var nodemailer = require("nodemailer");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var bodyparser = require("body-parser");
var ejs = require("ejs");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var feedbackRouter = require("./routes/feedback");
// var userRouter = require("./routes/user");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/admin");
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to database succesfully");
});
db.on("error", (err) => {
  if (err) {
    console.log(`Error in connection ${err}`);
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("html", ejs.__express);
app.set("view engine", "html");

// app.use(
//   cors({
//     origin: "http://localhost:4200",
//   })
// );
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/feedback", feedbackRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
// app.use("/api", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
