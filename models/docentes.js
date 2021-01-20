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
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
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
