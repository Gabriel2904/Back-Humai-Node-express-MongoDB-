const User = require("./../models/usuario");
const { hash, unhash } = require("./../utils/bcrypts");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");

const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const userFound = User.find({ email });
    const newUser = new User({
      username,
      email,
      password: hash(password),
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, privateKey, {
      expiresIn: 3600,
    });
    res.json({ token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const signIn = async (req, res) => {
  res.json("signIn");
};

module.exports = { signIn, signUp };
