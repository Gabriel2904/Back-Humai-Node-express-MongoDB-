const User = require("./../models/usuario");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");
const Roles = require("./../models/roles");

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

const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Roles.find({ _id: { $in: user.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "moderator") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "requiere ser moderador" });
};

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Roles.find({ _id: { $in: user.roles } });
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "requiere ser admin" });
};

module.exports = { verifyToken, isModerator, isAdmin };
