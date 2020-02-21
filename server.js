const express =require("express");
const app = express();
var cors = require("cors");
const passport = require("passport");
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require("cookie-session");
const crequest = require('./services/post');
const bodyParser = require('body-parser');

require("./models/cabRequests")
require("./models/User")
require('./services/passport')

mongoose.connect(keys.mongoURI,()=>{
    console.log("Connected.db")
})

app.use(
    cookieSession({
        maxAge:30 * 24 * 60* 60 * 1000,
        keys:[keys.cookieKey]
    })
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize())
app.use(passport.session())
app.use('/cabs',crequest);
const port=process.env.PORT  || 5000;
require('./routes/authRoutes')(app)
 
app.get('/',(req,res)=>{
    res.send("HELLO");
})   

app.listen(port,()=>{
    console.log(port);
})
