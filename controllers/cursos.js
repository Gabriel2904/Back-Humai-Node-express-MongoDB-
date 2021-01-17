const Cursos = require("./../models/cursos");

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
  const requiredData = ["name", "lastname", "phone"];
  if (id) return await Cursos.findById(id).populate("user", requiredData);
  return await Cursos.find().populate("user", requiredData);
};


const create = async (req, res) => {
  try {
    const newCurso = new Cursos(req.body);
    
    const data = await newCurso.save();
    res.status(201).json({ ok: true, msg: "Curso creado", data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};
module.exports = { create, all, single };