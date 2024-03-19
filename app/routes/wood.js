const express = require("express");
const woodCtrl = require("../controllers/wood.js");
const router = express();

router.get("/", woodCtrl.readAll);

module.exports = router;
