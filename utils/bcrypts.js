const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync();

const hash = (payload) => bcrypt.hashSync(payload, salt);
const unhash = (payload, hashedPayload) =>
  bcrypt.unhashSync(payload, hashedPayload);


module.exports = { hash, unhash };
