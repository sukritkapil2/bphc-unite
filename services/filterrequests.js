const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/cabRequests');
const passport = require("passport");

router.route('/').get((req, res) => {
    const request = new Post({
        from : req.body.fromValue,
        to : req.body.toValue
    });
    Post.find({from:request.from})
        .then((data) => {
            res.json(data);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;