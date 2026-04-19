/**
 * Array utility functions.
 */

/**
 * Returns unique elements from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} Array with duplicate elements removed.
 */
function unique(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

/**
 * Flattens a nested array by one level.
 * @param {Array} arr - The input array.
 * @returns {Array} The flattened array.
 */
function flatten(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((acc, item) => acc.concat(item), []);
}

/**
 * Chunks an array into smaller arrays of a specified size.
 * @param {Array} arr - The input array.
 * @param {number} size - The chunk size.
 * @returns {Array} Array of chunks.
 */
function chunk(arr, size) {
  if (!Array.isArray(arr) || typeof size !== 'number' || size <= 0) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Returns the intersection of two arrays.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} Elements common to both arrays.
 */
function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  return arr1.filter(item => arr2.includes(item));
}

module.exports = { unique, flatten, chunk, intersection };
