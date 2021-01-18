const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Base de datos Online");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { dbConnection };
