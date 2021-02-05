const {ROL} = require("./../models/roles")

const checkRoles = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ARoles.includes(req.body.roles[i])) {
        return res
          .status(400)
          .json({ message: "role ${req.body.roles[i]} does not exist" });
      }
    }
  }
  next();
};
