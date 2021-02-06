const Joi = require("@hapi/joi");
const messageAuth = {
  "any.require": "El campo es obligatorio",
  "string.min": "El campo debe tener más caracteres",
  "string.max": "El campo tiene muchos caracteres",
};

const schemas = {
  create: Joi.object().keys({
    username: Joi.string().min(5).max(30).required().messages({ messageAuth }),
    name: Joi.string().min(2).max(20).required().messages({ messageAuth }),
    lastname: Joi.string().min(1).max(20).required().messages({ messageAuth }),
    email: Joi.string().email().required().messages({ messageAuth }),
    password: Joi.string().min(3).max(15).required().messages({ messageAuth }),
  }),
};

module.exports = { schemas };
