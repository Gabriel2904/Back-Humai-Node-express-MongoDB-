const docentes = require("./../models/docentes");

const all = async (req, res) => {
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
  const requiredData = ["nombre", "apellido", " mail", "telefono", "area"];
  if (id) return await docentes.findById(id).populate("user", requiredData);
  return await docentes.find().populate("user", requiredData);
};

const create = async (req, res) => {
  try {
    const docente = new docentes(req.body);
    const data = await docente.save();
    res.status(201).json({ ok: true, msg: "Docente creado", data });
  } catch (e) {
    conmsole.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const modify = async (req, res) => {
  try {
    await docentes.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: "Cursos Modificado" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};
  

const del = async (req, res) => {
  try {
    await docentes.findByIdAndDelete(req.params.id);
    res.json({ status: "Docente Eliminado" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

module.exports = { all, single, create, modify, del };
