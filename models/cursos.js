const { Schema, model } = require("mongoose");

const cursoSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    modalidad: { type: String, required: true },
    valor: { type: Number, required: true },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

module.exports = model("cursos", cursoSchema);
