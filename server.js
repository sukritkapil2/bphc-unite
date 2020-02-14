const express =require("express");
const passport = require("passport");
const mongoose = require('mongoose')
const keys = require('./config/keys')
require("./models/User")
require('./services/passport')

mongoose.connect(keys.mongoURI,()=>{
    console.log("Connected.db")
})

const app =express();
const port=process.env.PORT  || 5000;
require('./routes/authRoutes')(app)
 
app.get('/',(req,res)=>{
    res.send("HELLO");
})   

app.listen(port,()=>{
    console.log(port);
})