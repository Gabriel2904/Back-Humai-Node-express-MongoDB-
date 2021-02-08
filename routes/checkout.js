const express = require("express");
const router = express.Router();
const { merPa } = require("./../controllers/checkout");

/* GET home page. */
router.post("/", merPa );

module.exports = router;
