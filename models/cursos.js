const { pool, ObjectID } = require("./../utils/db");
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

//El Delete aun no funciona
/*const del = async (id, conditions = { ObjectID }) =>
  (await pool())
    .collection(CURSOS_COLLECTION)
    .deleteOne(conditions, { _id: `ObjectId(${id})` });*/

module.exports = { get, getSingle, create, modify, del };
