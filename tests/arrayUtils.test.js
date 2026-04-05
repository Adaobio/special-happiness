const {
  unique,
  flatten,
  chunk,
  intersection,
  difference,
  groupBy,
} = require("../src/arrayUtils");

describe("arrayUtils", () => {
  describe("unique", () => {
    it("removes duplicate numbers", () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it("removes duplicate strings", () => {
      expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    });

    it("handles an array with no duplicates", () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("handles an empty array", () => {
      expect(unique([])).toEqual([]);
    });

    it("handles mixed types", () => {
      expect(unique([1, "1", 1, "1"])).toEqual([1, "1"]);
    });

    it("handles arrays with null and undefined", () => {
      expect(unique([null, null, undefined, undefined])).toEqual([
        null,
        undefined,
      ]);
    });

    it("throws TypeError for non-array input", () => {
      expect(() => unique("hello")).toThrow(TypeError);
      expect(() => unique(123)).toThrow(TypeError);
      expect(() => unique(null)).toThrow(TypeError);
    });
  });

  describe("flatten", () => {
    it("flattens one level deep by default", () => {
      expect(flatten([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, [5]]);
    });

    it("flattens to specified depth", () => {
      expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    });

    it("flattens completely with Infinity depth", () => {
      expect(flatten([1, [2, [3, [4]]]], Infinity)).toEqual([1, 2, 3, 4]);
    });

    it("returns same array at depth 0", () => {
      expect(flatten([1, [2, 3]], 0)).toEqual([1, [2, 3]]);
    });

    it("handles empty arrays", () => {
      expect(flatten([])).toEqual([]);
    });

    it("handles already flat arrays", () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("throws TypeError for non-array input", () => {
      expect(() => flatten("hello")).toThrow(TypeError);
    });

    it("throws TypeError for negative depth", () => {
      expect(() => flatten([1, 2], -1)).toThrow(TypeError);
    });
  });

  describe("chunk", () => {
    it("splits array into chunks of specified size", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it("handles exact division", () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    it("handles chunk size larger than array", () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    it("handles chunk size of 1", () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    it("handles empty arrays", () => {
      expect(chunk([], 3)).toEqual([]);
    });

    it("throws TypeError for non-array input", () => {
      expect(() => chunk("hello", 2)).toThrow(TypeError);
    });

    it("throws TypeError for invalid chunk size", () => {
      expect(() => chunk([1, 2], 0)).toThrow(TypeError);
      expect(() => chunk([1, 2], -1)).toThrow(TypeError);
      expect(() => chunk([1, 2], 1.5)).toThrow(TypeError);
      expect(() => chunk([1, 2], "2")).toThrow(TypeError);
    });
  });

  describe("intersection", () => {
    it("returns common elements", () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    });

    it("returns empty array when no common elements", () => {
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    it("handles duplicate elements in input", () => {
      expect(intersection([1, 1, 2, 2], [2, 2, 3, 3])).toEqual([2]);
    });

    it("handles empty first array", () => {
      expect(intersection([], [1, 2, 3])).toEqual([]);
    });

    it("handles empty second array", () => {
      expect(intersection([1, 2, 3], [])).toEqual([]);
    });

    it("handles string arrays", () => {
      expect(intersection(["a", "b", "c"], ["b", "c", "d"])).toEqual([
        "b",
        "c",
      ]);
    });

    it("throws TypeError for non-array arguments", () => {
      expect(() => intersection("abc", [1, 2])).toThrow(TypeError);
      expect(() => intersection([1, 2], "abc")).toThrow(TypeError);
    });
  });

  describe("difference", () => {
    it("returns elements in first array not in second", () => {
      expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
    });

    it("returns all elements when no overlap", () => {
      expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
    });

    it("returns empty array when all elements are common", () => {
      expect(difference([1, 2], [1, 2, 3])).toEqual([]);
    });

    it("handles empty first array", () => {
      expect(difference([], [1, 2])).toEqual([]);
    });

    it("handles empty second array", () => {
      expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    it("preserves duplicates from first array", () => {
      expect(difference([1, 1, 2, 2, 3], [2])).toEqual([1, 1, 3]);
    });

    it("throws TypeError for non-array arguments", () => {
      expect(() => difference("abc", [1])).toThrow(TypeError);
      expect(() => difference([1], 123)).toThrow(TypeError);
    });
  });

  describe("groupBy", () => {
    it("groups numbers by even/odd", () => {
      const result = groupBy([1, 2, 3, 4, 5, 6], (n) =>
        n % 2 === 0 ? "even" : "odd"
      );
      expect(result).toEqual({
        odd: [1, 3, 5],
        even: [2, 4, 6],
      });
    });

    it("groups strings by length", () => {
      const result = groupBy(["one", "two", "three", "four", "five"], (s) =>
        s.length
      );
      expect(result).toEqual({
        3: ["one", "two"],
        5: ["three"],
        4: ["four", "five"],
      });
    });

    it("handles empty arrays", () => {
      expect(groupBy([], (x) => x)).toEqual({});
    });

    it("handles single element arrays", () => {
      expect(groupBy([42], (n) => "key")).toEqual({ key: [42] });
    });

    it("groups objects by a property", () => {
      const items = [
        { type: "fruit", name: "apple" },
        { type: "vegetable", name: "carrot" },
        { type: "fruit", name: "banana" },
      ];
      const result = groupBy(items, (item) => item.type);
      expect(result).toEqual({
        fruit: [
          { type: "fruit", name: "apple" },
          { type: "fruit", name: "banana" },
        ],
        vegetable: [{ type: "vegetable", name: "carrot" }],
      });
    });

    it("throws TypeError for non-array input", () => {
      expect(() => groupBy("hello", (x) => x)).toThrow(TypeError);
    });

    it("throws TypeError for non-function callback", () => {
      expect(() => groupBy([1, 2, 3], "not a function")).toThrow(TypeError);
    });
  });
});
