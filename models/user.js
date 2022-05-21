const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  Id: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  identityNumber: {
    type: Number,
    required: true,
  },
});
module.exports = User = model("user", schema);
