const {
  clamp,
  average,
  median,
  isPrime,
  factorial,
  fibonacci,
} = require("../src/mathUtils");

describe("mathUtils", () => {
  describe("clamp", () => {
    it("returns the number when it is within range", () => {
      expect(clamp(5, 1, 10)).toBe(5);
    });

    it("returns min when number is below range", () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    it("returns max when number is above range", () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });

    it("returns min/max when number equals boundary", () => {
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
    });

    it("handles negative ranges", () => {
      expect(clamp(-5, -10, -1)).toBe(-5);
      expect(clamp(0, -10, -1)).toBe(-1);
    });

    it("handles zero-width ranges", () => {
      expect(clamp(5, 3, 3)).toBe(3);
    });

    it("throws RangeError when min > max", () => {
      expect(() => clamp(5, 10, 1)).toThrow(RangeError);
    });

    it("throws TypeError for non-number input", () => {
      expect(() => clamp("5", 0, 10)).toThrow(TypeError);
      expect(() => clamp(5, "0", 10)).toThrow(TypeError);
      expect(() => clamp(5, 0, "10")).toThrow(TypeError);
    });
  });

  describe("average", () => {
    it("calculates the average of positive numbers", () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    it("calculates the average of a single number", () => {
      expect(average([42])).toBe(42);
    });

    it("calculates the average with negative numbers", () => {
      expect(average([-1, 0, 1])).toBeCloseTo(0);
    });

    it("calculates the average with decimals", () => {
      expect(average([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
    });

    it("throws RangeError for empty array", () => {
      expect(() => average([])).toThrow(RangeError);
    });

    it("throws TypeError for non-array input", () => {
      expect(() => average("hello")).toThrow(TypeError);
    });

    it("throws TypeError when array contains non-numbers", () => {
      expect(() => average([1, "two", 3])).toThrow(TypeError);
    });

    it("throws TypeError when array contains NaN", () => {
      expect(() => average([1, NaN, 3])).toThrow(TypeError);
    });
  });

  describe("median", () => {
    it("returns the middle value for odd-length arrays", () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
    });

    it("returns the average of two middle values for even-length arrays", () => {
      expect(median([1, 2, 3, 4])).toBe(2.5);
    });

    it("handles a single element", () => {
      expect(median([42])).toBe(42);
    });

    it("handles unsorted input", () => {
      expect(median([5, 1, 3])).toBe(3);
    });

    it("handles negative numbers", () => {
      expect(median([-3, -1, -2])).toBe(-2);
    });

    it("does not modify the original array", () => {
      const arr = [5, 1, 3];
      median(arr);
      expect(arr).toEqual([5, 1, 3]);
    });

    it("throws RangeError for empty array", () => {
      expect(() => median([])).toThrow(RangeError);
    });

    it("throws TypeError for non-array input", () => {
      expect(() => median("hello")).toThrow(TypeError);
    });

    it("throws TypeError when array contains non-numbers", () => {
      expect(() => median([1, "two", 3])).toThrow(TypeError);
    });
  });

  describe("isPrime", () => {
    it("returns true for prime numbers", () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });

    it("returns false for non-prime numbers", () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(15)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });

    it("returns false for negative numbers", () => {
      expect(isPrime(-1)).toBe(false);
      expect(isPrime(-7)).toBe(false);
    });

    it("handles large primes", () => {
      expect(isPrime(7919)).toBe(true);
    });

    it("throws TypeError for non-integer input", () => {
      expect(() => isPrime(3.5)).toThrow(TypeError);
      expect(() => isPrime("7")).toThrow(TypeError);
    });
  });

  describe("factorial", () => {
    it("returns 1 for 0", () => {
      expect(factorial(0)).toBe(1);
    });

    it("returns 1 for 1", () => {
      expect(factorial(1)).toBe(1);
    });

    it("calculates factorial correctly", () => {
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
    });

    it("throws RangeError for negative numbers", () => {
      expect(() => factorial(-1)).toThrow(RangeError);
    });

    it("throws TypeError for non-integer input", () => {
      expect(() => factorial(3.5)).toThrow(TypeError);
      expect(() => factorial("5")).toThrow(TypeError);
    });
  });

  describe("fibonacci", () => {
    it("returns 0 for n=0", () => {
      expect(fibonacci(0)).toBe(0);
    });

    it("returns 1 for n=1", () => {
      expect(fibonacci(1)).toBe(1);
    });

    it("calculates fibonacci numbers correctly", () => {
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(6)).toBe(8);
      expect(fibonacci(10)).toBe(55);
      expect(fibonacci(20)).toBe(6765);
    });

    it("throws RangeError for negative numbers", () => {
      expect(() => fibonacci(-1)).toThrow(RangeError);
    });

    it("throws TypeError for non-integer input", () => {
      expect(() => fibonacci(3.5)).toThrow(TypeError);
      expect(() => fibonacci("5")).toThrow(TypeError);
    });
  });
});
