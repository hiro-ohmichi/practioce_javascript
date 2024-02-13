import { numbersEqual } from "./index.ts";

describe("abs", () => {
  test("sample01", () => {
    expect(numbersEqual(0.3 - 0.2, 0.1)).toBe(true);
  });

  test("sample02", () => {
    expect(numbersEqual(0.2 - 0.1, 0.1)).toBe(true);
  });
});
