const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    name: String,
    title: String,
    body: String,
  },
  {
    versionKey: false,
  }
);

const feedbackModel = mongoose.model("feedback", feedbackSchema);

module.exports = { feedbackModel };
