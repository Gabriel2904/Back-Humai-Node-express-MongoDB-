const User = require("./../models/usuario");
const Role = require("./../models/roles");
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
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createUser };
