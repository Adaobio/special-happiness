/**
 * Array utility functions.
 */

/**
 * Returns an array with duplicate values removed.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with unique values.
 */
function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  return [...new Set(arr)];
}

/**
 * Flattens a nested array to the specified depth.
 * @param {Array} arr - The input array.
 * @param {number} [depth=1] - The depth to flatten to.
 * @returns {Array} The flattened array.
 */
function flatten(arr, depth = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  if (typeof depth !== "number" || depth < 0) {
    throw new TypeError("Expected a non-negative number for depth");
  }
  return arr.flat(depth);
}

/**
 * Splits an array into chunks of the specified size.
 * @param {Array} arr - The input array.
 * @param {number} size - The chunk size.
 * @returns {Array} An array of chunks.
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  if (typeof size !== "number" || size <= 0 || !Number.isInteger(size)) {
    throw new TypeError("Expected a positive integer for size");
  }
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
 * @returns {Array} The intersection of the two arrays.
 */
function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Expected arrays for both arguments");
  }
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter((item) => set2.has(item));
}

/**
 * Returns the difference of two arrays (elements in arr1 not in arr2).
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The difference of the two arrays.
 */
function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError("Expected arrays for both arguments");
  }
  const set2 = new Set(arr2);
  return arr1.filter((item) => !set2.has(item));
}

/**
 * Groups elements of an array by the result of a callback function.
 * @param {Array} arr - The input array.
 * @param {Function} fn - The grouping function.
 * @returns {Object} An object mapping group keys to arrays.
 */
function groupBy(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function for the grouping callback");
  }
  return arr.reduce((groups, item) => {
    const key = fn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

module.exports = {
  unique,
  flatten,
  chunk,
  intersection,
  difference,
  groupBy,
};
