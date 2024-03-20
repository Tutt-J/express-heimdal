const express = require("express");
const woodCtrl = require("../controllers/wood.js");
const router = express();

router.get("/", woodCtrl.readAll);
router.get("/hardness/:hardness", woodCtrl.readByHardness);

module.exports = router;
