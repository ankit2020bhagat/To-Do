const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const todo = require("./routes/todo");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and runnig"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is runnint on port ${PORT}`);
});
