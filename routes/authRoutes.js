const passport = require('passport')

module.exports = (app)=>{
    app.get('/auth/google/redirect',passport.authenticate('google'),(req,res)=>
    {
        res.send("SUCCESS")
    })

    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }))
}
