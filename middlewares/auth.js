const { schemas } = require("./schemas/auth");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");

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
  if (!token)
    return res.status(403).json({ message: "No se ha encontrado Token" });
  const decoded = jwt.verify(token, privateKey);
  console.log(decoded);
  next();
};

module.exports = { validateCreate, validateModify, verifyToken };
