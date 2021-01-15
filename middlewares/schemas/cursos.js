const Joi = require("@hapi/joi");
const messageCursos = {
  "any.require": "El campo es obligatorio",
  "string.min": "El campo debe ser mayor a 2 caracteres",
  "string.max": "El campo no debe superar los 30 caracteres",
};

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(5).max(30).required().messages({ messageCursos }),
    modalidad: Joi.string()
      .min(6)
      .max(30)
      .required()
      .messages({ messageCursos }),
    valor: Joi.number().min(3).max(4).required().messages({ messageCursos }),
    fecha_inicio: Joi.date()
      .required()
      .messages({ "any.require": "El campo es obligatorio" }),
    fecha_fin: Joi.date()
      .required()
      .messages({ "any.require": "El campo es obligatorio" }),
  }),

  modify: Joi.object().keys({
    nombre: Joi.string().min(5).max(20).required().messages({ messageCursos }),
    modalidad: Joi.string()
      .min(5)
      .max(20)
      .required()
      .messages({ messageCursos }),
    valor: Joi.number().min(3).max(5).required().messages({ messageCursos }),
    fecha_inicio: Joi.date()
      .required()
      .messages({ "any.require": "El campo es obligatorio" }),
    fecha_fin: Joi.date()
      .required()
      .messages({ "any.require": "El campo es obligatorio" }),
  }),
};

module.exports = { schemas };
