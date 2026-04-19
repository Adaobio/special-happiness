/**
 * String utility functions.
 */

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

/**
 * Truncates a string to a specified length and adds an ellipsis.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length before truncation.
 * @returns {string} The truncated string.
 */
function truncate(str, maxLength) {
  if (typeof str !== 'string') return '';
  if (typeof maxLength !== 'number' || maxLength < 0) return str;
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is a palindrome.
 */
function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = { capitalize, reverseString, truncate, isPalindrome };
