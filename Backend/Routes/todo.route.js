const express = require("express");
const { TodoModel } = require("../Models/todo.model");
const { Auth } = require("../Middleware/Auth");

const todoRouter = express.Router();

todoRouter.post("/create", Auth, async (req, res) => {
  const { userId, title, description } = req.body;
  try {
    const todo = TodoModel({ userId, title, description, status: false });
    await todo.save();
    res.status(200).send({ msg: "Todo created successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

todoRouter.get("/", Auth, async (req, res) => {
  try {
    const todos = await TodoModel.find({ userId: req.query.userId });
    res.status(200).send({ todos });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

todoRouter.patch("/update/:id", Auth, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTodo = await TodoModel.findOneAndUpdate({ _id: id }, req.body);
    if (updatedTodo) {
      res.status(200).send({ msg: "Todo updated successfully" });
    } else {
      res.status(404).send({ msg: "Todo not found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

todoRouter.delete("/delete/:id", Auth, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await TodoModel.findOneAndDelete({ _id: id });
    if (deletedTodo) {
      res.status(200).send({ msg: "Todo deleted successfully" });
    } else {
      res.status(404).send({ msg: "Todo not found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { todoRouter };
