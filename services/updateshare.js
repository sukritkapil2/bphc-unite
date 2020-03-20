const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Post = require("../models/sharingRequests");
router.route("/update").post(function (req, res) {
    const newRequest = new Post({
        id: req.body.id,
        status: req.body.status
    });
    
        Post.findOneAndUpdate({ id: newRequest.id }, { $set: { status: newRequest.status } }, { upsert: true }, function (err, doc) {
            if (err) return res.send(500, { error: err });
            return res.send('Succesfully saved.');
        });
   
    });
module.exports = router;
