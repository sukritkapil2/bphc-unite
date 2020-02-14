  const express =require("express");
  const passport = require("passport");
  const GoogleStrategy=require("passport-google-oauth20").Strategy;
  const keys = require("./config/keys");

  const app =express();
  const port=process.env.PORT  || 5000;
  
 passport.use(
   new GoogleStrategy({
     clientID: keys.googleClientId,
     clientSecret: keys.googleClientSecret,
     callbackURL: '/auth/google/redirect'
        },
       (accessToken, refreshToken, profile, done)=>{
            console.log("accessToken",accessToken);
            console.log("refreshToken",refreshToken);
            console.log("profile",profile);
            console.log("done",done);
            //  User.findOrCreate({ googleId: profile.id }, function(err, user) {
    
    //    return done(err, user);
    //  });
        }
    )
 );
    app.get('/',(req,res)=>{
        res.send("HELLO");
    })   
    
    app.get('/auth/google/redirect',passport.authenticate('google'),(req,res)=>
    {
        res.send("SUCCESS")
    })

    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }))

    app.listen(port,()=>{
        console.log(port);
    })