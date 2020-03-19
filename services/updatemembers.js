const express = require("express");
const router = express.Router();
const Post = require("../models/CarPool");

router.route("/update").post(function(req, res) {
  Post.findOneAndUpdate(
    { Field: "CarPool" },
    { $inc: { Counter: 1 } },
    { upsert: true },
    function(err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully saved.");
    }
  );
});

module.exports = router;
