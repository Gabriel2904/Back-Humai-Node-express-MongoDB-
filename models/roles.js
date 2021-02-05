const { Schema, model } = require("mongoose");

const roleArray = ["user", "admin", "moderator"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model("Role", roleSchema, roleArray);
