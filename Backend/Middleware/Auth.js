const jwt = require("jsonwebtoken");
require("dotenv").config();
const blacklist = require("../blacklist");

const Auth = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    if (blacklist.includes(token)) {
      res.status(400).json({ msg: "login again" });
      return;
    }
    try {
      const decoded = jwt.verify(token, "Pomodoro-clone");
      if (decoded) next();
      else res.status(400).json({ msg: "invalid token or token is expired" });
    } catch (err) {
      res.json({ err });
    }
  } else res.status(400).json({ msg: "Token Not Found!" });
};

module.exports = { Auth };
