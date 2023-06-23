const express = require("express");
const app = express();
const cors = require("cors");
const { userRouter } = require("./Routes/user.route");
const { connection } = require("./db");
require("dotenv").config();

const { feedbackRouter } = require("./Routes/feedback.route");
const { todoRouter } = require("./Routes/todo.route");

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/feedback", feedbackRouter);
app.use("/todos", todoRouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("listening on port 8000 and connected to db");
  } catch (err) {
    console.log(err);
    console.log("server failed");
  }
});
