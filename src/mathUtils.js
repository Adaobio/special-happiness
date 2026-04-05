/**
 * Math utility functions.
 */

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} num - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The clamped number.
 */
function clamp(num, min, max) {
  if (typeof num !== "number" || typeof min !== "number" || typeof max !== "number") {
    throw new TypeError("Expected numbers for all arguments");
  }
  if (min > max) {
    throw new RangeError("min must be less than or equal to max");
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} nums - The array of numbers.
 * @returns {number} The average.
 */
function average(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Expected an array of numbers");
  }
  if (nums.length === 0) {
    throw new RangeError("Cannot calculate average of an empty array");
  }
  if (!nums.every((n) => typeof n === "number" && !isNaN(n))) {
    throw new TypeError("All elements must be valid numbers");
  }
  return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} nums - The array of numbers.
 * @returns {number} The median.
 */
function median(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Expected an array of numbers");
  }
  if (nums.length === 0) {
    throw new RangeError("Cannot calculate median of an empty array");
  }
  if (!nums.every((n) => typeof n === "number" && !isNaN(n))) {
    throw new TypeError("All elements must be valid numbers");
  }
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Checks if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is prime.
 */
function isPrime(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new TypeError("Expected an integer");
  }
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} num - The non-negative integer.
 * @returns {number} The factorial.
 */
function factorial(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new TypeError("Expected an integer");
  }
  if (num < 0) {
    throw new RangeError("Cannot calculate factorial of a negative number");
  }
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calculates the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence (0-indexed).
 * @returns {number} The nth Fibonacci number.
 */
function fibonacci(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new TypeError("Expected an integer");
  }
  if (n < 0) {
    throw new RangeError("Expected a non-negative integer");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = {
  clamp,
  average,
  median,
  isPrime,
  factorial,
  fibonacci,
};
