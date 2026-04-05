const {
  capitalize,
  reverse,
  isPalindrome,
  truncate,
  toCamelCase,
  countOccurrences,
} = require("../src/stringUtils");

describe("stringUtils", () => {
  describe("capitalize", () => {
    it("capitalizes the first letter of a lowercase string", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("returns the same string if already capitalized", () => {
      expect(capitalize("Hello")).toBe("Hello");
    });

    it("handles single character strings", () => {
      expect(capitalize("a")).toBe("A");
    });

    it("handles empty strings", () => {
      expect(capitalize("")).toBe("");
    });

    it("handles strings starting with a number", () => {
      expect(capitalize("123abc")).toBe("123abc");
    });

    it("handles strings with special characters", () => {
      expect(capitalize("!hello")).toBe("!hello");
    });

    it("throws TypeError for non-string input", () => {
      expect(() => capitalize(123)).toThrow(TypeError);
      expect(() => capitalize(null)).toThrow(TypeError);
      expect(() => capitalize(undefined)).toThrow(TypeError);
      expect(() => capitalize([])).toThrow(TypeError);
    });
  });

  describe("reverse", () => {
    it("reverses a simple string", () => {
      expect(reverse("hello")).toBe("olleh");
    });

    it("handles single character strings", () => {
      expect(reverse("a")).toBe("a");
    });

    it("handles empty strings", () => {
      expect(reverse("")).toBe("");
    });

    it("handles palindromes", () => {
      expect(reverse("racecar")).toBe("racecar");
    });

    it("handles strings with spaces", () => {
      expect(reverse("hello world")).toBe("dlrow olleh");
    });

    it("handles strings with special characters", () => {
      expect(reverse("a!b@c")).toBe("c@b!a");
    });

    it("throws TypeError for non-string input", () => {
      expect(() => reverse(123)).toThrow(TypeError);
      expect(() => reverse(null)).toThrow(TypeError);
    });
  });

  describe("isPalindrome", () => {
    it("returns true for a palindrome", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });

    it("returns true for case-insensitive palindromes", () => {
      expect(isPalindrome("RaceCar")).toBe(true);
    });

    it("returns true for palindromes with spaces and punctuation", () => {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    it("returns false for non-palindromes", () => {
      expect(isPalindrome("hello")).toBe(false);
    });

    it("returns true for empty strings", () => {
      expect(isPalindrome("")).toBe(true);
    });

    it("returns true for single characters", () => {
      expect(isPalindrome("a")).toBe(true);
    });

    it("handles numeric palindromes", () => {
      expect(isPalindrome("12321")).toBe(true);
      expect(isPalindrome("12345")).toBe(false);
    });

    it("throws TypeError for non-string input", () => {
      expect(() => isPalindrome(12321)).toThrow(TypeError);
    });
  });

  describe("truncate", () => {
    it("truncates a string longer than maxLength", () => {
      expect(truncate("Hello, world!", 5)).toBe("Hello...");
    });

    it("does not truncate a string shorter than maxLength", () => {
      expect(truncate("Hi", 10)).toBe("Hi");
    });

    it("does not truncate a string equal to maxLength", () => {
      expect(truncate("Hello", 5)).toBe("Hello");
    });

    it("handles maxLength of 0", () => {
      expect(truncate("Hello", 0)).toBe("...");
    });

    it("handles empty strings", () => {
      expect(truncate("", 5)).toBe("");
    });

    it("throws TypeError for non-string input", () => {
      expect(() => truncate(123, 5)).toThrow(TypeError);
    });

    it("throws TypeError for invalid maxLength", () => {
      expect(() => truncate("hello", -1)).toThrow(TypeError);
      expect(() => truncate("hello", "5")).toThrow(TypeError);
    });
  });

  describe("toCamelCase", () => {
    it("converts hyphenated strings", () => {
      expect(toCamelCase("hello-world")).toBe("helloWorld");
    });

    it("converts underscored strings", () => {
      expect(toCamelCase("hello_world")).toBe("helloWorld");
    });

    it("converts space-separated strings", () => {
      expect(toCamelCase("hello world")).toBe("helloWorld");
    });

    it("converts multi-word strings", () => {
      expect(toCamelCase("one-two-three")).toBe("oneTwoThree");
    });

    it("handles already camelCase strings", () => {
      expect(toCamelCase("helloWorld")).toBe("helloWorld");
    });

    it("handles PascalCase input by lowering the first letter", () => {
      expect(toCamelCase("HelloWorld")).toBe("helloWorld");
    });

    it("handles single word strings", () => {
      expect(toCamelCase("hello")).toBe("hello");
    });

    it("handles empty strings", () => {
      expect(toCamelCase("")).toBe("");
    });

    it("handles trailing separators", () => {
      expect(toCamelCase("hello-")).toBe("hello");
      expect(toCamelCase("hello_")).toBe("hello");
    });

    it("throws TypeError for non-string input", () => {
      expect(() => toCamelCase(123)).toThrow(TypeError);
    });
  });

  describe("countOccurrences", () => {
    it("counts occurrences of a substring", () => {
      expect(countOccurrences("hello hello hello", "hello")).toBe(3);
    });

    it("returns 0 when substring is not found", () => {
      expect(countOccurrences("hello world", "xyz")).toBe(0);
    });

    it("returns 0 for empty substring", () => {
      expect(countOccurrences("hello", "")).toBe(0);
    });

    it("returns 0 for empty string", () => {
      expect(countOccurrences("", "hello")).toBe(0);
    });

    it("handles overlapping substrings (non-overlapping count)", () => {
      expect(countOccurrences("aaa", "aa")).toBe(1);
    });

    it("is case-sensitive", () => {
      expect(countOccurrences("Hello hello HELLO", "hello")).toBe(1);
    });

    it("counts single character substrings", () => {
      expect(countOccurrences("banana", "a")).toBe(3);
    });

    it("throws TypeError for non-string arguments", () => {
      expect(() => countOccurrences(123, "hello")).toThrow(TypeError);
      expect(() => countOccurrences("hello", 123)).toThrow(TypeError);
    });
  });
});
