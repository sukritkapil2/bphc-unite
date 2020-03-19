const express =require('express');
const router =express.Router();
const mongoose =require('mongoose');
const Events = require('../models/Events');

router.route('/suggest').post((req,res)=>{
    const newEvents = new Events({
        eventName : req.body.name,
        eventAddr :req.body.addr,
        status : req.body.status    
    });
    newEvents.save().then(post=>res.json(post));
    console.log("Event request sucessfully submitted");
});

router.route('/get').get((req,res)=>{
    Events.find({ status : "1" })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            console.log(err);
        })
})

router.route('/get/all').get((req,res)=>{
    Events.find({ status : "0" })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            console.log(err);
        })
})

module.exports=router;