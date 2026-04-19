const { clamp, average, factorial, isPrime } = require('../src/mathUtils');

describe('mathUtils', () => {
  describe('clamp', () => {
    test('clamps value within range', () => {
      expect(clamp(15, 0, 10)).toBe(10);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(5, 0, 10)).toBe(5);
    });

    test('returns NaN for non-number input', () => {
      expect(clamp('a', 0, 10)).toBeNaN();
    });
  });

  describe('average', () => {
    test('calculates the average', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    test('returns NaN for empty array', () => {
      expect(average([])).toBeNaN();
    });

    test('returns NaN for non-array input', () => {
      expect(average('not an array')).toBeNaN();
    });
  });

  describe('factorial', () => {
    test('calculates factorial', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
    });

    test('returns NaN for negative numbers', () => {
      expect(factorial(-1)).toBeNaN();
    });

    test('returns NaN for non-integers', () => {
      expect(factorial(1.5)).toBeNaN();
    });
  });

  describe('isPrime', () => {
    test('identifies prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(13)).toBe(true);
    });

    test('identifies non-prime numbers', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(9)).toBe(false);
    });

    test('returns false for non-integer input', () => {
      expect(isPrime(2.5)).toBe(false);
    });
  });
});
