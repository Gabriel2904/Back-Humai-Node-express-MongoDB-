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

router.get("/", all);
router.get("/:id", single);
router.post("/", validateCreate, create);
router.put("/", validateModify, modify);
router.delete("/:id", del);

module.exports = router;
