const express = require("express");
const router = express.Router();
const model = require("./../models/cursos");

const all = async (req, res) =>
  model
    .get({ conditions: {}, fields: {} })
    .then((response) => res.json(response))
    .catch((e) => res.sendStatus(500));

/*const single = (req, res) =>
  model
    .get({
      conditions: { _id: `ObjectId(${req.params.id})` },
      fields: { nombre: true, modalidad: true },
    })
    .then(([response]) => res.json(response))
    .catch((e) => res.sendStatus(500));*/

const single = (req, res) =>
  model
    .getSingle(req.params.id)
    .then(([response]) => res.json(response))
    .catch((e) => res.sendStatus(500));

const create = (req, res) => {
  model
    .create(req.body)
    .then(({ insertId }) => res.json(insertId))
    .catch((e) => res.sendStatus(500));
};

const deleteById = (req, res) =>
  model
    .deleteById(req.params.id)
    .then((response) => res.json(response))
    .catch((e) => res.sendStatus(500));

router.get("/all", all);
router.get("/single/:id", single);
router.post("/create", create);
router.get("/delete/:id", deleteById);

module.exports = router;
