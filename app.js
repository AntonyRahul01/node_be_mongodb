const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/dbconfig");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/v1", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Server Connected...");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running" + PORT);
    console.log(`http://localhost:${PORT}`);
  } else console.log("Error occurred, server can't start", error);
});

// zAigjOjV7PiZ9Gm8
