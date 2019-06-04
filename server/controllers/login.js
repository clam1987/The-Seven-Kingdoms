const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = [];

  // Convert empty fields to empty strings so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email field checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field cannot be empty";
  } else if (!Validator.isEmpty(data.email)) {
    errors.email = "Email is Invalid";
  }

  // Password field check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};