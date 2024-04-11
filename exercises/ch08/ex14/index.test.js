import { any, catching } from "./index.js";

describe("test any function", () => {
  test("case1", () => {
    const isNonZero = any(
      (n) => n > 0,
      (n) => n < 0
    );
    expect(isNonZero(0)).toBeFalsy;
    expect(isNonZero(42)).toBeTruthy;
    expect(isNonZero(-0, 5)).toBeTruthy;
  });
});

describe("test catching function", () => {
  test("case1", () => {
    const safeJsonParse = catching(JSON.parse, (e) => {
      return { error: e.toString() };
    });
    expect(safeJsonParse('{"a": 1}')).toEqual({ a: 1 });
    expect(safeJsonParse("{Invalid Json}")).toEqual({
      error: "SyntaxError: Unexpected token I in JSON at position 1",
    });
  });
});
