const express = require("express");
const app = express();
var cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const crequest = require("./services/post");
const bodyParser = require("body-parser");
const getrequests = require("./services/fetchrequests");
const deleterequests = require("./services/deleterequest");
const path = require("path");
const adminLogin = require("./services/adminLogin");
const sendFeedback = require("./services/sendFeedback");
const getFeedback = require("./services/getFeedback");
const deleteFeedback = require("./services/deleteFeedback");
require("./models/cabRequests");
require("./models/User");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected.db");
  }
);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/cabs", crequest);
app.use("/api/fetchrequests", getrequests);
app.use("/api/deletemyrequests", deleterequests);
app.use("/adminlogin", adminLogin);
app.use("/feedback", sendFeedback);
app.use("/getfeedback", getFeedback);
app.use("/deletefeedback", deleteFeedback);

const port = process.env.PORT || 5000;
require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
});

app.listen(port, () => {
  console.log(port);
});
