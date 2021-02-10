const User = require("./../models/usuario");
const { hash, unhash } = require("./../utils/bcrypts");
const Role = require("./../models/roles");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");

const signUp = async (req, res) => {
  try {
    //Request Body
    const { username, name, lastname, email, password, roles } = req.body;
    //Create a new User Object
    const newUser = new User({
      username,
      name,
      lastname,
      email,
      password: hash(password),
    });
    //Checking Roles
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }
    //Savingf User Obj MongoDB
    const savedUser = await newUser.save();
    console.log(savedUser);
    //Create a Token
    const token = jwt.sign({ id: savedUser._id }, privateKey, {
      expiresIn: 14000,
    });
    res.json({ token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  //ComparePassword Doesn´t Work
  /*const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );
  if (!matchPassword)
    return res
      .status(401)
      .json({ token: null, message: "Contraseña invalida" });*/

  const token = jwt.sign({ id: userFound._id }, privateKey, {
    expiresIn: 3600,
  });

  console.log(userFound);
  res.json({ token });
};

module.exports = { signIn, signUp };
