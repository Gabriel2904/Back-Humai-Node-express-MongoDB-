const express = require("express");
const router = express.Router();

/* GET home page. */
router.post("/send-email", (req, res) => {
  console.log(req.body);
  res.send("recevided");
});

module.exports = router;