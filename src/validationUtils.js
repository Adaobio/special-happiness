/**
 * Validation utility functions.
 */

/**
 * Validates an email address format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email format is valid.
 */
function isValidEmail(email) {
  if (typeof email !== "string") {
    throw new TypeError("Expected a string");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a URL format.
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if the URL format is valid.
 */
function isValidUrl(url) {
  if (typeof url !== "string") {
    throw new TypeError("Expected a string");
  }
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty string.
 */
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Checks if a value is a positive integer.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a positive integer.
 */
function isPositiveInteger(value) {
  return typeof value === "number" && Number.isInteger(value) && value > 0;
}

/**
 * Validates that a value is within a specified range.
 * @param {number} value - The value to check.
 * @param {number} min - The minimum (inclusive).
 * @param {number} max - The maximum (inclusive).
 * @returns {boolean} True if the value is within the range.
 */
function isInRange(value, min, max) {
  if (typeof value !== "number" || typeof min !== "number" || typeof max !== "number") {
    throw new TypeError("Expected numbers for all arguments");
  }
  return value >= min && value <= max;
}

/**
 * Validates a password against common rules.
 * Must be at least 8 characters, contain an uppercase letter,
 * a lowercase letter, a digit, and a special character.
 * @param {string} password - The password to validate.
 * @returns {{ valid: boolean, errors: string[] }} Validation result.
 */
function validatePassword(password) {
  if (typeof password !== "string") {
    throw new TypeError("Expected a string");
  }
  const errors = [];

  if (password.length < 8) {
    errors.push("Must be at least 8 characters long");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Must contain at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Must contain at least one lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Must contain at least one digit");
  }
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    errors.push("Must contain at least one special character");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

module.exports = {
  isValidEmail,
  isValidUrl,
  isNonEmptyString,
  isPositiveInteger,
  isInRange,
  validatePassword,
};
