const { number } = require("@hapi/joi");
const { string } = require("joi");
const { Schema, model } = require("mongoose");

const docenteSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    mail: {
      type: string,
      required: true,
    },
    telefono: {
      type: number,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

module.exports = model("docentes", docenteSchema);
