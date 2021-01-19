const cursos = require("./../models/cursos");

const all = async (_, res) => {
  try {
    const data = await find();
    res.json({ ok: true, data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await find(id);
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const find = async (id = null) => {
  console.log(id);
  const requiredData = ["nombre", "modalidad", "valor"]; // revisa esto
  if (id) return await cursos.findById(id).populate("user", requiredData);
  return await cursos.find().populate("user", requiredData);
};

const create = async (req, res) => {
  try {
    const curso = new cursos(req.body);
    const data = await curso.save();
    res.status(201).json({ ok: true, msg: "Curso creado", data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const modify = async (req, res) => {
  try {
    await cursos.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: "Cursos Modificado" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const del = async (req, res) => {
  try {
    await cursos.findByIdAndDelete(req.params.id);
    res.json({ status: "Curso Eliminado" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};
module.exports = { create, all, single, del, modify };
