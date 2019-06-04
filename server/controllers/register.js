const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = [];

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name Check for empty field
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field cannot be empty";
  }

  // Email check for empty field and Valid
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field cannot be empty";
  } else if (!Validator.isEmpty(data.email)) {
    errors.email = "Email is Invalid";
  }

  // Password Check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field empty";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm passworld field is empty";
  }

  if (Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must have at least 8 characters";
  }

  if (Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords do not match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};