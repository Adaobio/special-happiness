const { isValidEmail, isNonEmptyString, isPositiveNumber, isValidURL } = require('../src/validationUtils');

describe('validationUtils', () => {
  describe('isValidEmail', () => {
    test('validates correct emails', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('test.user@domain.co')).toBe(true);
    });

    test('rejects invalid emails', () => {
      expect(isValidEmail('not-an-email')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
    });

    test('returns false for non-string input', () => {
      expect(isValidEmail(123)).toBe(false);
    });
  });

  describe('isNonEmptyString', () => {
    test('returns true for non-empty strings', () => {
      expect(isNonEmptyString('hello')).toBe(true);
    });

    test('returns false for empty strings', () => {
      expect(isNonEmptyString('')).toBe(false);
      expect(isNonEmptyString('   ')).toBe(false);
    });

    test('returns false for non-string input', () => {
      expect(isNonEmptyString(123)).toBe(false);
      expect(isNonEmptyString(null)).toBe(false);
    });
  });

  describe('isPositiveNumber', () => {
    test('returns true for positive numbers', () => {
      expect(isPositiveNumber(5)).toBe(true);
      expect(isPositiveNumber(0.1)).toBe(true);
    });

    test('returns false for zero and negative numbers', () => {
      expect(isPositiveNumber(0)).toBe(false);
      expect(isPositiveNumber(-1)).toBe(false);
    });

    test('returns false for non-number input', () => {
      expect(isPositiveNumber('5')).toBe(false);
      expect(isPositiveNumber(NaN)).toBe(false);
    });
  });

  describe('isValidURL', () => {
    test('validates correct URLs', () => {
      expect(isValidURL('https://example.com')).toBe(true);
      expect(isValidURL('http://test.org/path')).toBe(true);
    });

    test('rejects invalid URLs', () => {
      expect(isValidURL('not-a-url')).toBe(false);
      expect(isValidURL('')).toBe(false);
    });

    test('returns false for non-string input', () => {
      expect(isValidURL(123)).toBe(false);
    });
  });
});
