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
  if (typeof num !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The average value.
 */
function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return NaN;
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return sum / numbers.length;
}

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - The non-negative integer.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Checks if a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime.
 */
function isPrime(n) {
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n)) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { clamp, average, factorial, isPrime };
