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
const { verifyToken } = require("./../middlewares/auth");

router.get("/", all);
router.get("/:id", single);
router.post("/", verifyToken, validateCreate, create);
router.put("/:id", verifyToken, validateModify, modify);
router.delete("/:id", verifyToken, del);

module.exports = router;
