const express = require("express");
const router = express.Router();
const { create } = require("../controllers/user");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/auth");

router.post("/", verifyToken, isAdmin, isModerator, create);

module.exports = router;
