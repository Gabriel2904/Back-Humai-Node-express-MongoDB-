const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/auth");
const { validateCreate, validateModify } = require("./../middlewares/user");
const { checkRoles } = require("./../middlewares/verifySignup");

router.post("/", verifyToken, isAdmin, checkRoles,  createUser, validateModify, validateCreate);

module.exports = router;
