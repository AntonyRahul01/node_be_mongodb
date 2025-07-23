const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://learning:zAigjOjV7PiZ9Gm8@learning.jgp49el.mongodb.net/"
  )
  .then(() => {
    console.log("Database Connection Successfully!");
  })
  .catch((err) => {
    console.error("Database Connection Failed:", err.message);
  });
