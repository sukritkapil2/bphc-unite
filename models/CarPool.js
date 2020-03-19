const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carPoolSchema = new Schema(
  {
    members:[ {
      type: String,
      unique: true
    }],
  },
  { versionKey: false }
);

module.exports = Post = mongoose.model("CarPool", carPoolSchema);
