const express = require("express");

const { feedbackModel } = require("../Models/feedback.model");
const feedbackRouter = express.Router();

feedbackRouter.post("/add", async (req, res) => {
  try {
    const data = feedbackModel(req.body);
    await data.save();
    res.status(200).send({ msg: "Feedback successfully created!" });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

feedbackRouter.get("/", async (req, res) => {
  try {
    const data = await feedbackModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ err: error });
  }
});
module.exports = { feedbackRouter };
