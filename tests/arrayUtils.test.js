const { unique, flatten, chunk, intersection } = require('../src/arrayUtils');

describe('arrayUtils', () => {
  describe('unique', () => {
    test('removes duplicates', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test('handles empty array', () => {
      expect(unique([])).toEqual([]);
    });

    test('returns empty array for non-array input', () => {
      expect(unique('not an array')).toEqual([]);
    });
  });

  describe('flatten', () => {
    test('flattens nested arrays by one level', () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('handles already flat arrays', () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('returns empty array for non-array input', () => {
      expect(flatten('not an array')).toEqual([]);
    });
  });

  describe('chunk', () => {
    test('chunks array into smaller arrays', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('handles chunk size larger than array', () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test('returns empty array for invalid inputs', () => {
      expect(chunk('not an array', 2)).toEqual([]);
      expect(chunk([1, 2], -1)).toEqual([]);
    });
  });

  describe('intersection', () => {
    test('returns common elements', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    test('returns empty array when no common elements', () => {
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    test('returns empty array for non-array input', () => {
      expect(intersection('a', [1])).toEqual([]);
    });
  });
});
