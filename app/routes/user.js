const express = require("express");
const userCtrl = require("../controllers/user.js");
const router = express();

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
