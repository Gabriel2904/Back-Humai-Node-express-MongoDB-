const Joi = require("@hapi/joi");
const message = {
  "any.require": "El campo es obligatorio",
  "string.min": "El campo debe ser mayor a 2 caracteres",
  "string.max": "El campo no debe superar los 30 caracteres",
};

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(5).max(20).required.messages({ message }),
    modalidad: Joi.string().min(5).max(20).required.messages({ message }),
    costo: Joi.number().min(3).max(4).required.message({ message }),
    fecha_inicio: Joi.date()
      .required()
      .message({ "any.require": "El campo es obligatorio" }),
    fecha_fin: Joi.date()
      .required()
      .message({ "any.require": "El campo es obligatorio" }),
  }),
};
