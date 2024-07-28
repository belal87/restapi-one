const express = require("express");
const cors = require("cors");
require("./config/db");
const app = express();

const userRouter = require("./routes/user.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 not found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
