const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Current page location: Homepage");
});

app.use("/api/users", require("./routes/users"));

mongoose.connect(
  `mongodb+srv://renzuser:${process.env.DB_MONGO}@cluster0.yifph.mongodb.net/cluster0?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => (err ? console.log(err) : console.log("Connection Success!"))
);

app.listen(4000, () => console.log("Listening at PORT: 3000"));
