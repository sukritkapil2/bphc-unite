const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    googleId:String,
    name:String,
    avatar:String,
    email:String
})

mongoose.model("users",userSchema)