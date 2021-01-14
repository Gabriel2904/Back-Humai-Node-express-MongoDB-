const { pool } = require("./../utils/db");
const CURSOS_COLLECTION = "cursos";

const get = async ({ conditions = {}, fields = {} }) =>
  (await pool())
    .collection(CURSOS_COLLECTION)
    .find(conditions, { projection: fields })
    .toArray();

const getSingle = async ({
  conditions = {},
  fields = { nombre: true, modalidad: true },
}) =>
  (await pool())
    .collection(CURSOS_COLLECTION)
    .find(conditions, { projection: fields })
    .toArray();

const create = async (obj) =>
  (await pool()).collection(CURSOS_COLLECTION).insertOne(obj);

const modify = async (id, obj) =>
  (await pool())
    .collection(CURSOS_COLLECTION)
    .updateOne({ _id: `ObjectId(${id})` }, { $set: `${obj}` });

module.exports = { get, getSingle, create, modify };
