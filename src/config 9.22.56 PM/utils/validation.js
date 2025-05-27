const validator = require("validator");


const validateSignUpData = (req) => {
  const { firstName, lastName, email, password } = req.body;
  if(!firstName || !lastName){
    throw new Error("Name is not valid!!");
  }else if(!validator.isEmail(email)){
    throw new Error("Email is not valid!");
  }else if(!validator.isStrongPassword(password)){
    throw new Error("Please enter a strong Password!");
  }
}

const validateEditProfileData = (req) => {
  const allowEditUser = [
      "firstName",
    "lastName",
    "email",
    "photoUrl",
    "gender",
    "age",
    "about",
    "skills",
  ]

  const isAllowEditing = Object.keys(req.body).every(p => allowEditUser.includes(p));
  return isAllowEditing;
}

module.exports = {
  validateSignUpData,
  validateEditProfileData,
};
