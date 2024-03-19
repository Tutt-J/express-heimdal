const express = require("express");
const userCtrl = require("../controllers/user.js");
const router = express();

router.post("/signup", userCtrl.signup);

router.post("/login", function (req, res) {
  res.send("You are login");
});

module.exports = router;
