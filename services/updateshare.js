const express = require("express");
const router = express.Router();
const mongo = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;
const Post = require("../models/sharingRequests");
const passport = require("passport");

router.route("/update").post(function (req, res) {
    const newRequest = new Post({
        id: req.body.id,
        status: req.body.status
    });
    console.log(ObjectId(newRequest.id))
    Post.findOneAndUpdate({"_id":ObjectId(newRequest.id)}, {"status":newRequest.status}, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send('Succesfully saved.');
    });
});

module.exports = router;
