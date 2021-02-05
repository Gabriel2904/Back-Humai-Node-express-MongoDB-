const user = require("./../models/usuario");

const create = (req, res) => {
  res.json("creating user");
};

module.exports = { create };
