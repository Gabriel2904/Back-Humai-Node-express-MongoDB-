const { schemas } = require("./schemas/auth");

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

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  console.log(token);
  next();
};

module.exports = { validateCreate, validateModify, verifyToken };
