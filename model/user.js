const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    phone: Number,
    email: String,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
