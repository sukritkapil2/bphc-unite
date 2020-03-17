const express =require('express');
const router =express.Router();
const mongoose =require('mongoose');
const Events = require('../models/Events');

router.route('/suggest').post((req,res)=>{
    const newEvents = new Events({
        eventName : req.body.name,
        eventAddr :req.body.addr    
    });
    newEvents.save().then(post=>res.json(post));
    console.log("Event request sucessfully submitted");
});

router.route('/get').get((req,res)=>{
    Events.find({ })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            console.log(err);
        })
})

module.exports=router;