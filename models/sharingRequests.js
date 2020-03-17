const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sharingSchema = new Schema({
  requestor: {
    type: String
  },
  requestee: {
    type: String
  },
  msg: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  from: {
    type: String
  },
  to: {
    type: String
  }
});

module.exports = Post = mongoose.model("sharingRequests", sharingSchema);
