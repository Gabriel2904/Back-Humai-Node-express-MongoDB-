const express = require("express");
const router = express.Router();
const { signIn, signUp } = require("./../controllers/auth");
const {
  checkDuplicateData,
  checkRoles,
} = require("./../middlewares/verifySignup");

router.post("/signIn", checkDuplicateData, checkRoles, signIn);
router.post("/signUp", checkDuplicateData, checkRoles, signUp);

module.exports = router;
