const { schemas } = require("./schemas/docentes");

const validateCreate = (req, res, next) => {
  const { error, value } = schemas.create.validate(req.body);
  console.log(error);
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};

const validateModify = (req, res, next) => {
  const { error, value } = schemas.modify.validate(req.body);
  console.log(error);
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};

module.exports = { validateCreate, validateModify };
