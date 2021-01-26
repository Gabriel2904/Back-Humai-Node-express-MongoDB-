const User = require("./../models/usuario");
const { hash, unhash } = require("./../utils/bcrypts");

const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
      username,
      email,
      password: hash(password),
    });
    await newUser.save();
    console.log(newUser);
    res.json("signUp");
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const signIn = async (req, res) => {
  res.json("signIn");
};

module.exports = { signIn, signUp };
