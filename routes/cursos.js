const express = require("express");
const router = express.Router();
const { create, all, single } = require("./../controllers/cursos");

router.get("/", all);
router.get("/:id", single);
router.post("/", create);
//router.put("/:id", cursosCtrl.modify);
//router.delete("/:id", cursosCtrl.delete);

module.exports = router;
