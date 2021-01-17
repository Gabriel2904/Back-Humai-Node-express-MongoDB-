const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
