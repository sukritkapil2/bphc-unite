const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/sharingRequests');
const passport = require("passport");

router.route('/').get((req, res) => {
    Post.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;