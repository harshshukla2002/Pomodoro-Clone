const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = { TodoModel };
