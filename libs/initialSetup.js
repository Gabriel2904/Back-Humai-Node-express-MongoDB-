const mongoose = require("mongoose");
const role = require("../models/roles");

const createRoles = async () => {
  try {
    const count = await role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new role({ name: "user" }).save(),
      new role({ name: "moderator" }).save(),
      new role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

module.exports = {createRoles}