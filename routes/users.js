const express = require("express");
const router = express.Router();
const { createUser, all, single, modify, del } = require("../controllers/user");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/auth");
const { validateCreate, validateModify } = require("./../middlewares/user");
const { checkRoles } = require("./../middlewares/verifySignup");

router.get("/", verifyToken, isAdmin, checkRoles, isModerator, all);
router.get("/:id", verifyToken, isAdmin, isModerator, checkRoles, single)
router.post("/", verifyToken, isAdmin, checkRoles,  createUser, validateModify, validateCreate);
router.put("/:id", verifyToken, isAdmin, isModerator, checkRoles, validateModify, modify)
router.delete("/:id", verifyToken, isAdmin, checkRoles, del);

module.exports = router;
