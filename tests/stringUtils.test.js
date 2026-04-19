const { capitalize, reverseString, truncate, isPalindrome } = require('../src/stringUtils');

describe('stringUtils', () => {
  describe('capitalize', () => {
    test('capitalizes the first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('returns empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    test('returns empty string for non-string input', () => {
      expect(capitalize(123)).toBe('');
    });

    test('handles single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('reverseString', () => {
    test('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('handles empty string', () => {
      expect(reverseString('')).toBe('');
    });

    test('returns empty string for non-string input', () => {
      expect(reverseString(123)).toBe('');
    });
  });

  describe('truncate', () => {
    test('truncates long strings', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    test('does not truncate short strings', () => {
      expect(truncate('hi', 5)).toBe('hi');
    });

    test('returns empty string for non-string input', () => {
      expect(truncate(123, 5)).toBe('');
    });
  });

  describe('isPalindrome', () => {
    test('detects palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('handles mixed case', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
    });

    test('returns false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('returns false for non-string input', () => {
      expect(isPalindrome(123)).toBe(false);
    });
  });
});
