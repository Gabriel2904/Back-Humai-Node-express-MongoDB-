const Joi = require("@hapi/joi");
const message = {
  "any.require": "El campo es obligatorio",
  "string.min": "El campo debe superar al menos 2 caracteres",
  "string.max": "El campo no debe superar los 30 caracteres",
};

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required().messages({ message }),
    apellido: Joi.string().min(2).max(30).optional().messages({ message }),
    mail: Joi.string().email().required().messages({ message }),
    telefono: Joi.string().optional().messages({ message }),
    area: Joi.string().min(2).max(20).max(30).required().messages({ message }),
  }),

  modify: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).optional().messages({ message }),
    apellido: Joi.string().min(2).max(30).optional().messages({ message }),
    mail: Joi.string().email().optional().messages({ message }),
    telefono: Joi.string().optional().messages({ message }),
    area: Joi.string().min(2).max(20).max(30).required().messages({ message }),
  }),
};
module.exports = { schemas };
