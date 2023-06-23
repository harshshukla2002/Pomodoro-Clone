const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    gender: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  UserModel,
};
