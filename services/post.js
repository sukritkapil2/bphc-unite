const express =require('express');
const router =express.Router();
const mongoose =require('mongoose');
const Post =require('../models/cabRequests');
const passport = require("passport");

router.route('/request').post((req,res)=>{
    const newRequest=new Post({
        msg:  req.body.msg,
        name: req.body.name,
        date: req.body.date       
    });
    newRequest.save().then(post=>res.json(post));
    console.log("Request sucessfully submitted");
});



module.exports  =router;