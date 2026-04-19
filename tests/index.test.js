const utils = require('../src/index');

describe('index', () => {
  test('exports all string utilities', () => {
    expect(typeof utils.capitalize).toBe('function');
    expect(typeof utils.reverseString).toBe('function');
    expect(typeof utils.truncate).toBe('function');
    expect(typeof utils.isPalindrome).toBe('function');
  });

  test('exports all array utilities', () => {
    expect(typeof utils.unique).toBe('function');
    expect(typeof utils.flatten).toBe('function');
    expect(typeof utils.chunk).toBe('function');
    expect(typeof utils.intersection).toBe('function');
  });

  test('exports all math utilities', () => {
    expect(typeof utils.clamp).toBe('function');
    expect(typeof utils.average).toBe('function');
    expect(typeof utils.factorial).toBe('function');
    expect(typeof utils.isPrime).toBe('function');
  });

  test('exports all validation utilities', () => {
    expect(typeof utils.isValidEmail).toBe('function');
    expect(typeof utils.isNonEmptyString).toBe('function');
    expect(typeof utils.isPositiveNumber).toBe('function');
    expect(typeof utils.isValidURL).toBe('function');
  });
});
