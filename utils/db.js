const MongoClient = require("mongodb").MongoClient;

const pool = async () => {
  try {
    return (await MongoClient.connect("mongodb://localhost:27017/")).db(
      "DBHumai"
    );
  } catch (err) {
    console.log(err.stack);
  }
  
};
module.exports = { pool };

/*const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/")
  .then((db) => console.log("DN is conected"))
  .catch((err) => console.error(err));*/
