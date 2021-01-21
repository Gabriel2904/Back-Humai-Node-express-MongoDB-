const { User, userSchema } = require("./../models/usuario");

const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;
  const newUser = new userSchema({
    username,
    email,
    password: User.encryptPassword(password),
  });
  console.log(newUser);
  res.json("signUp");
};

const signIn = async (req, res) => {
  res.json("signIn");
};

module.exports = { signIn, signUp };
