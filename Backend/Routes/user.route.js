const express = require("express");
const { UserModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const blacklist = require("../blacklist");
const { Auth } = require("../Middleware/Auth");

// Create User
userRouter.post("/register", async (req, res) => {
  const { name, email, gender, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).send({ msg: "User Already Registered!!" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = UserModel({ name, email, gender, password: hash });
        await user.save();
        res.status(200).send({ msg: "User Registered!!" });
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// User Login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, user: user.name },
            "Pomodoro-clone"
          );
          res.status(200).send({ msg: "Login Successful!!", token, user });
        } else {
          res.status(400).send({ msg: "Wrong Password!!" });
        }
      });
    } else res.status(400).send({ msg: "Wrong Email!!" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).json({ users: data });
  } catch (error) {
    res.status(400).json({ error });
  }
});

userRouter.get("/logout", Auth, (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    blacklist.push(token);
    res.status(200).json({ msg: "the user is logged out" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = { userRouter };
