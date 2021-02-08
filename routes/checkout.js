const express = require("express");
const router = express.Router();
const { createPreference } = require("./../controllers/checkout");

/* GET home page. */
router.post("/", createPreference);

module.exports = router;
