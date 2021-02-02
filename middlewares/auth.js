const { schemas } = require("./schemas/auth");
const User = require("./../models/usuario");
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
  try {
    const token = req.headers["x-access-token"];

    if (!token)
      return res.status(403).json({ message: "No se ha encontrado Token" });

    const decoded = jwt.verify(token, privateKey);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user)
      return res.status(404).json({ message: "no existe este usuario" });
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { validateCreate, validateModify, verifyToken };
