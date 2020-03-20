const express = require("express");
const router = express.Router();
const Post = require("../models/CarPool");

router.route("/update").post(function(req, res) {
  const updateReq={
    id:req.body.id,
    member:req.body.member
  }
  Post.findOneAndUpdate(
    { id: updateReq.id },
    { $push: { Member:updateReq.member } },
    { upsert: true },
    function(err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully Updated Member.");
    }
  );
});

module.exports = router;
