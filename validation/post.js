const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post message must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = " Text is Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
