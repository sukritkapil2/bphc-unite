const express =require("express");
const app = express();
const passport = require("passport");
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require("cookie-session");

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

app.use(passport.initialize())
app.use(passport.session())

const port=process.env.PORT  || 5000;
require('./routes/authRoutes')(app)
 
app.get('/',(req,res)=>{
    res.send("HELLO");
})   

app.listen(port,()=>{
    console.log(port);
})

