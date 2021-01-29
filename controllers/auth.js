const User = require("./../models/usuario");
const { hash, unhash } = require("./../utils/bcrypts");
const Role = require("./../models/roles");

const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");

const signUp = async (req, res) => {
  try {
    //Request Body
    const { username, email, password, roles } = req.body;
    //Create a new User Object
    const newUser = new User({
      username,
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
