const express = require("express");
const router = express();

router.get("/", function (req, res) {
  res.send("List of woods");
});

module.exports = router;
