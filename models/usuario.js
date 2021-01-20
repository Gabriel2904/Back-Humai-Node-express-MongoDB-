const { Schema, model } = require("mongoose");

new Schema({
  usurname: {
    type: String,
    unique: true,
  },
  email: {
    String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      ref: "role",
      type: Schema.Types.ObjectId,
    },
  ],
});
