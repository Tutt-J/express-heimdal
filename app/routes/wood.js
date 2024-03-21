const express = require("express");
const woodCtrl = require("../controllers/wood.js");
const auth = require("../middlewares/auth.js")
const multer = require('../middlewares/multer.js')

const router = express();

router.get("/", auth, woodCtrl.readAll);
router.get("/hardness/:hardness", auth, woodCtrl.readByHardness);
router.post("/", auth, multer, woodCtrl.create);
router.put("/:id", auth, multer, woodCtrl.update);

module.exports = router;
