//import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sun", () => {
    it("returns 15 when array [1,2,3,4,5]", () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it("returns same value when one value", () => {
      expect(abs([1])).toBe(1);
    });
  });

  describe("factorial", () => {
    it("returns 1 when input 0 ", () => {
      expect(factorial(0)).toBe(1);
    });

    it("returns 1 when input 1 ", () => {
      expect(factorial(1)).toBe(1);
    });

    it("returns true value when input any natural number ", () => {
      expect(factorial(5)).toBe(120);
    });
  });

  describe("fib", () => {
    it("returns 1 when input 1 ", () => {
      expect(fib(1)).toBe(1);
    });

    it("returns true value when any natural number ", () => {
      expect(factorial(50)).toBe(12586269025);
    });
  });
});
