const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: String,
    fatherName: String,
    age: Number,
    cnic: Number,
    fathercnic: Number,
    email: String,
    phoneNumber: Number,
    houseNumber: Number,
    address: String,
  },
  { collection: "userData", versionKey: false }
);

const Users = mongoose.model("userData", userSchema);

module.exports = Users;
