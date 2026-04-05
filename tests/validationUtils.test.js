const {
  isValidEmail,
  isValidUrl,
  isNonEmptyString,
  isPositiveInteger,
  isInRange,
  validatePassword,
} = require("../src/validationUtils");

describe("validationUtils", () => {
  describe("isValidEmail", () => {
    it("returns true for valid email addresses", () => {
      expect(isValidEmail("user@example.com")).toBe(true);
      expect(isValidEmail("first.last@domain.org")).toBe(true);
      expect(isValidEmail("user+tag@example.co.uk")).toBe(true);
      expect(isValidEmail("user123@test.io")).toBe(true);
    });

    it("returns false for invalid email addresses", () => {
      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail("plainaddress")).toBe(false);
      expect(isValidEmail("@no-local.com")).toBe(false);
      expect(isValidEmail("user@")).toBe(false);
      expect(isValidEmail("user @example.com")).toBe(false);
      expect(isValidEmail("user@.com")).toBe(false);
    });

    it("throws TypeError for non-string input", () => {
      expect(() => isValidEmail(123)).toThrow(TypeError);
      expect(() => isValidEmail(null)).toThrow(TypeError);
      expect(() => isValidEmail(undefined)).toThrow(TypeError);
    });
  });

  describe("isValidUrl", () => {
    it("returns true for valid URLs", () => {
      expect(isValidUrl("https://example.com")).toBe(true);
      expect(isValidUrl("http://example.com")).toBe(true);
      expect(isValidUrl("https://www.example.com/path?q=1")).toBe(true);
      expect(isValidUrl("ftp://files.example.com")).toBe(true);
      expect(isValidUrl("https://example.com:8080/path")).toBe(true);
    });

    it("returns false for invalid URLs", () => {
      expect(isValidUrl("")).toBe(false);
      expect(isValidUrl("not-a-url")).toBe(false);
      expect(isValidUrl("example.com")).toBe(false);
      expect(isValidUrl("://missing-scheme.com")).toBe(false);
    });

    it("throws TypeError for non-string input", () => {
      expect(() => isValidUrl(123)).toThrow(TypeError);
      expect(() => isValidUrl(null)).toThrow(TypeError);
    });
  });

  describe("isNonEmptyString", () => {
    it("returns true for non-empty strings", () => {
      expect(isNonEmptyString("hello")).toBe(true);
      expect(isNonEmptyString("a")).toBe(true);
      expect(isNonEmptyString("  a  ")).toBe(true);
    });

    it("returns false for empty strings", () => {
      expect(isNonEmptyString("")).toBe(false);
    });

    it("returns false for whitespace-only strings", () => {
      expect(isNonEmptyString("   ")).toBe(false);
      expect(isNonEmptyString("\t\n")).toBe(false);
    });

    it("returns false for non-string values", () => {
      expect(isNonEmptyString(123)).toBe(false);
      expect(isNonEmptyString(null)).toBe(false);
      expect(isNonEmptyString(undefined)).toBe(false);
      expect(isNonEmptyString([])).toBe(false);
      expect(isNonEmptyString({})).toBe(false);
      expect(isNonEmptyString(true)).toBe(false);
    });
  });

  describe("isPositiveInteger", () => {
    it("returns true for positive integers", () => {
      expect(isPositiveInteger(1)).toBe(true);
      expect(isPositiveInteger(42)).toBe(true);
      expect(isPositiveInteger(1000000)).toBe(true);
    });

    it("returns false for zero", () => {
      expect(isPositiveInteger(0)).toBe(false);
    });

    it("returns false for negative integers", () => {
      expect(isPositiveInteger(-1)).toBe(false);
      expect(isPositiveInteger(-42)).toBe(false);
    });

    it("returns false for non-integers", () => {
      expect(isPositiveInteger(1.5)).toBe(false);
      expect(isPositiveInteger(0.1)).toBe(false);
    });

    it("returns false for non-number types", () => {
      expect(isPositiveInteger("1")).toBe(false);
      expect(isPositiveInteger(null)).toBe(false);
      expect(isPositiveInteger(undefined)).toBe(false);
      expect(isPositiveInteger(NaN)).toBe(false);
      expect(isPositiveInteger(Infinity)).toBe(false);
    });
  });

  describe("isInRange", () => {
    it("returns true when value is within range", () => {
      expect(isInRange(5, 1, 10)).toBe(true);
    });

    it("returns true when value equals boundaries", () => {
      expect(isInRange(1, 1, 10)).toBe(true);
      expect(isInRange(10, 1, 10)).toBe(true);
    });

    it("returns false when value is below range", () => {
      expect(isInRange(0, 1, 10)).toBe(false);
    });

    it("returns false when value is above range", () => {
      expect(isInRange(11, 1, 10)).toBe(false);
    });

    it("handles negative ranges", () => {
      expect(isInRange(-5, -10, -1)).toBe(true);
      expect(isInRange(0, -10, -1)).toBe(false);
    });

    it("handles zero-width ranges", () => {
      expect(isInRange(5, 5, 5)).toBe(true);
      expect(isInRange(4, 5, 5)).toBe(false);
    });

    it("handles decimal values", () => {
      expect(isInRange(1.5, 1, 2)).toBe(true);
    });

    it("throws TypeError for non-number arguments", () => {
      expect(() => isInRange("5", 1, 10)).toThrow(TypeError);
      expect(() => isInRange(5, "1", 10)).toThrow(TypeError);
      expect(() => isInRange(5, 1, "10")).toThrow(TypeError);
    });
  });

  describe("validatePassword", () => {
    it("returns valid for a strong password", () => {
      const result = validatePassword("StrongP@ss1");
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual([]);
    });

    it("rejects passwords shorter than 8 characters", () => {
      const result = validatePassword("Ab1!xyz");
      expect(result.valid).toBe(false);
      expect(result.errors).toContain("Must be at least 8 characters long");
    });

    it("rejects passwords without uppercase letters", () => {
      const result = validatePassword("lowercase1!");
      expect(result.valid).toBe(false);
      expect(result.errors).toContain(
        "Must contain at least one uppercase letter"
      );
    });

    it("rejects passwords without lowercase letters", () => {
      const result = validatePassword("UPPERCASE1!");
      expect(result.valid).toBe(false);
      expect(result.errors).toContain(
        "Must contain at least one lowercase letter"
      );
    });

    it("rejects passwords without digits", () => {
      const result = validatePassword("NoDigits!@");
      expect(result.valid).toBe(false);
      expect(result.errors).toContain("Must contain at least one digit");
    });

    it("rejects passwords without special characters", () => {
      const result = validatePassword("NoSpecial1A");
      expect(result.valid).toBe(false);
      expect(result.errors).toContain(
        "Must contain at least one special character"
      );
    });

    it("returns multiple errors for weak passwords", () => {
      const result = validatePassword("weak");
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(1);
    });

    it("handles empty string", () => {
      const result = validatePassword("");
      expect(result.valid).toBe(false);
      expect(result.errors).toContain("Must be at least 8 characters long");
    });

    it("accepts various special characters", () => {
      expect(validatePassword("Abcdefg1!").valid).toBe(true);
      expect(validatePassword("Abcdefg1@").valid).toBe(true);
      expect(validatePassword("Abcdefg1#").valid).toBe(true);
      expect(validatePassword("Abcdefg1$").valid).toBe(true);
    });

    it("throws TypeError for non-string input", () => {
      expect(() => validatePassword(123)).toThrow(TypeError);
      expect(() => validatePassword(null)).toThrow(TypeError);
    });
  });
});
