const express = require("express");
const router = express.Router();
const { create, all, single, del, modify } = require("./../controllers/cursos");

router.get("/", all);
router.get("/:id", single);
router.post("/", create);
router.put("/:id", modify);
router.delete("/:id", del);

module.exports = router;
