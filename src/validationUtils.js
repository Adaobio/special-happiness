/**
 * Validation utility functions.
 */

/**
 * Validates an email address format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email format is valid.
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a non-empty string.
 */
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Checks if a value is a positive number.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a positive number.
 */
function isPositiveNumber(value) {
  return typeof value === 'number' && !isNaN(value) && value > 0;
}

/**
 * Validates a URL format.
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if the URL format is valid.
 */
function isValidURL(url) {
  if (typeof url !== 'string') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

module.exports = { isValidEmail, isNonEmptyString, isPositiveNumber, isValidURL };
