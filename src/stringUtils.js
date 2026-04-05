/**
 * String utility functions.
 */

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
function capitalize(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 */
function reverse(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str.split("").reverse().join("");
}

/**
 * Checks if a string is a palindrome (case-insensitive).
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is a palindrome.
 */
function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

/**
 * Truncates a string to a given length and appends an ellipsis.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length before truncation.
 * @returns {string} The truncated string.
 */
function truncate(str, maxLength) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  if (typeof maxLength !== "number" || maxLength < 0) {
    throw new TypeError("Expected a non-negative number for maxLength");
  }
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

/**
 * Converts a string to camelCase.
 * @param {string} str - The input string (e.g., "hello-world" or "hello_world").
 * @returns {string} The camelCase version of the string.
 */
function toCamelCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

/**
 * Counts the occurrences of a substring in a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to count.
 * @returns {number} The number of occurrences.
 */
function countOccurrences(str, substring) {
  if (typeof str !== "string" || typeof substring !== "string") {
    throw new TypeError("Expected strings for both arguments");
  }
  if (substring.length === 0) return 0;
  let count = 0;
  let pos = 0;
  while ((pos = str.indexOf(substring, pos)) !== -1) {
    count++;
    pos += substring.length;
  }
  return count;
}

module.exports = {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  toCamelCase,
  countOccurrences,
};
