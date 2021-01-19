const express = require("express");
const router = express.Router();
const { create, all, single, del, modify } = require("./../controllers/cursos");
const { validateCreate, validateModify } = require("./../middlewares/cursos");

router.get("/", all);
router.get("/:id", single);
router.post("/", validateCreate, create);
router.put("/:id", validateModify, modify);
router.delete("/:id", del);

module.exports = router;
