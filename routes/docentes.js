const express = require("express");
const router = express.Router();
const {
  create,
  all,
  single,
  del,
  modify,
} = require("./../controllers/docentes");
const { validateCreate, validateModify } = require("./../middlewares/docentes");
const { verifyToken, isModerator, isAdmin } = require("./../middlewares/auth");

router.get("/", all);
router.get("/:id", single);
router.post("/", verifyToken, validateCreate, isModerator, create);
router.put("/:id", verifyToken, validateModify, isModerator, modify);
router.delete("/:id", verifyToken, isAdmin, del);

module.exports = router;
