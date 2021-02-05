const express = require("express");
const router = express.Router();
const { create } = require("../controllers/user");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/auth");
const { checkRoles } = require("./../middlewares/verifySignup");

router.post("/", verifyToken, isAdmin, isModerator, checkRoles, create);

module.exports = router;
