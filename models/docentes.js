const { pool, ObjectID } = require("./../utils/db");
const DOCENTES_COLLECTION = "docentes";

const get = async ({ conditions = {}, fields = {} }) =>
  (await pool())
    .collection(DOCENTES_COLLECTION)
    .find(conditions, { projection: fields })
    .toArray();

const getSingle = async ({
  conditions = {},
  fields = { nombre: true, apellido: true, mail: true, area: true },
}) =>
  (await pool())
    .collection(DOCENTES_COLLECTION)
    .find(conditions, { projection: fields })
    .toArray();

const create = async (obj) =>
  (await pool()).collection(DOCENTES_COLLECTION).insertOne(obj);

const modify = async (id, obj) =>
  (await pool())
    .collection(DOCENTES_COLLECTION)
    .updateOne({ _id: `ObjectId(${id})` }, { $set: `${obj}` });

//El Delete aun no funciona
const del = async (id, conditions = { ObjectID }) =>
  (await pool())
    .collection(DOCENTES_COLLECTION)
    .deleteOne(conditions, { _id: `ObjectId(${id})` });

module.exports = { get, getSingle, create, modify, del };
