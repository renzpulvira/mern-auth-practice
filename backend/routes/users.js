const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/user1", (req, res) => {
  res.send("Username: Renz Pulvira");
});

module.exports = router;
