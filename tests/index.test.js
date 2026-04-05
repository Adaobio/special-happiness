const lib = require("../src/index");

describe("index (integration)", () => {
  it("exports all string utility functions", () => {
    expect(typeof lib.capitalize).toBe("function");
    expect(typeof lib.reverse).toBe("function");
    expect(typeof lib.isPalindrome).toBe("function");
    expect(typeof lib.truncate).toBe("function");
    expect(typeof lib.toCamelCase).toBe("function");
    expect(typeof lib.countOccurrences).toBe("function");
  });

  it("exports all array utility functions", () => {
    expect(typeof lib.unique).toBe("function");
    expect(typeof lib.flatten).toBe("function");
    expect(typeof lib.chunk).toBe("function");
    expect(typeof lib.intersection).toBe("function");
    expect(typeof lib.difference).toBe("function");
    expect(typeof lib.groupBy).toBe("function");
  });

  it("exports all math utility functions", () => {
    expect(typeof lib.clamp).toBe("function");
    expect(typeof lib.average).toBe("function");
    expect(typeof lib.median).toBe("function");
    expect(typeof lib.isPrime).toBe("function");
    expect(typeof lib.factorial).toBe("function");
    expect(typeof lib.fibonacci).toBe("function");
  });

  it("exports all validation utility functions", () => {
    expect(typeof lib.isValidEmail).toBe("function");
    expect(typeof lib.isValidUrl).toBe("function");
    expect(typeof lib.isNonEmptyString).toBe("function");
    expect(typeof lib.isPositiveInteger).toBe("function");
    expect(typeof lib.isInRange).toBe("function");
    expect(typeof lib.validatePassword).toBe("function");
  });

  it("functions work correctly when imported from index", () => {
    expect(lib.capitalize("hello")).toBe("Hello");
    expect(lib.unique([1, 1, 2])).toEqual([1, 2]);
    expect(lib.isPrime(7)).toBe(true);
    expect(lib.isValidEmail("test@example.com")).toBe(true);
  });
});
