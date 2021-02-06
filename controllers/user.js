const User = require("./../models/usuario");
const Role = require("./../models/roles");
const { find } = require("./../models/usuario");

const createUser = async (req, res) => {
  try {
    const { username, name, lastname, email, password, roles } = req.body;
    const rolesFound = await Role.find({ name: { $in: roles } });
    // creating a new User
    const user = new User({
      username,
      name,
      lastname,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      name: savedUser.name,
      lastname: savedUser.lastname,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const all = async (req, res) => {
  try {
    const data = await find();
    res.json({ ok: true, data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await find(id);
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const modify = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req, params.id, req.body);
    res.json({ status: "Usuario modificado con Exito" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, e });
  }
};

const del = async (req, res)=> {
  try{
    await User.findByIdAndDelete(req.params.id,);
    res.json({status: "Usuario eliminado con Exito"})
  } catch (e){
    console.rerror(e);
    res.status(500).json({ok: false, e})
  }
}

module.exports = { createUser, all, single, modify, del };
