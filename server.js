const express = require("express");
const app = express();
var cors = require("cors");
const passport = require("passport");
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require("cookie-session");
const crequest = require('./services/post');
const bodyParser = require('body-parser');
const getrequests = require('./services/fetchrequests')
const deleterequests = require('./services/deleterequest')
const filterrequests = require('./services/filterrequests')
const path = require('path');
require('dotenv').config();             

const host = process.env.YOUR_HOST || '0.0.0.0'
require("./models/cabRequests")
require("./models/User")
require('./services/passport')

// mongoose.connect(keys.mongoURI, () => {
//     console.log("Connected.db")
// })
mongoose.connect(process.env.MONGODB_URI || keys.mongoURI, { useNewUrlParser: true }, () => {
       console.log("Connected.db")
    });

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize())
app.use(passport.session())
app.use("/api/cabs", crequest);
app.use("/api/fetchrequests", getrequests);
app.use("/api/deletemyrequests", deleterequests);
app.use("/api/filterrequests",filterrequests);
const port = process.env.PORT || 5000 ;
require('./routes/authRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html')); // relative path
    });
}
else{
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html")); // relative path
});
}
app.listen(port,host, () => {
    console.log(port);
})
