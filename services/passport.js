
const passport = require("passport");
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose')
const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
  done(null,user.id);
})

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
      done(null,user);
  })
})

passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/redirect'
         },
        (accessToken, refreshToken, profile, done)=>{
           User.findOne({googleId:profile.id})
           .then((userExists)=>{
                if(userExists){ 
                  console.log(profile);
                  console.log('Current user is :'+profile.id)
                  done(null,userExists);
                } else{
                    new User({googleId:profile.id , name:profile.displayName, email:profile.email,avatar:profile.picture}).save().then((newUser)=>{
                    console.log('new user created'+newUser)
                    done(null,newUser);   
                    })
                }
           })
            
         }
     )
  );