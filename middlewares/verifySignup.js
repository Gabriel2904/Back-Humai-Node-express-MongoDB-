const ROLE = ["user", "admin", "moderator"];
const User = require("./../models/usuario");

const checkDuplicateData = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).json({ message: "Este Usuario ya existe" });

  const email = await User.findOne({ email: req.body.email });
  if (email) return res.status(400).json({ message: "Este email ya existe" });

  next();
};

const checkRoles = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLE.includes(req.body.roles[i])) {
        return res
          .status(400)
          .json({ message: "role ${req.body.roles[i]} does not exist" });
      }
    }
  }
  next();
};

module.exports = { checkRoles, checkDuplicateData };
