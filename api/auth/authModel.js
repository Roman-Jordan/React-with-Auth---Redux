const db = require(_dbConfig);
const bcrypt = require("bcrypt");
const rolesModel = require("../public/roles/roles-model");

module.exports = {
  addUser,
  findByEmail,
  findById,
  findOrCreateByEmail,
  removeUser,
};

//Nice to declare Tables up top Yo, including sub tables
const table = "users";

function findById(id) {
  return db(table).select("*").where({ id }).first();
}

function findByEmail(email) {
  return db(table + " as u")
    .select("u.id", "u.email", "u.password")
    .where({ email })
    .first();
}

async function findOrCreateByEmail(profile) {
  //Get the proposed user
  const email = profile.email;
  const user = await db(table).select("email", "id").where({ email }).first();

  //If the user exist
  if (user) {
    const getUserRoles = await rolesModel.findAllRolesById(user.id);

    return {
      user_id: user.id,
      user_roles: [...getUserRoles],
      message: "Welcome Back",
    };
  } else {
    //CREATE NEW USER

    //Encrypt Password, consider doing off AccessToken
    const password =
      profile.password || bcrypt.hashSync(Date.now() + email, 14);

    //Create New User
    const newUser = await addUser({ email, password });

    //Assign User Role
    await rolesModel.addUserRole({
      user_id: newUser.id,
      role_id: 2,
    });

    const getUserRoles = await rolesModel.findAllRolesById(newUser.id);

    return {
      user_profile: { ...newProfile },
      user_roles: [...getUserRoles],
      newUser: "Welcome New User",
    };
  }
}

function addUser(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}

function removeUser(id) {
  return db(table).where({ id }).del();
}
