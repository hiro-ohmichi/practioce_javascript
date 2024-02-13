import { sub } from "./index.ts";
describe("function add", () => {
  test("some calculations", () => {
    expect(sub(1, 2)).toBe(-1);
    expect(sub(1, -2)).toBe(3);
    expect(sub(0, 2)).toBe(-2);
    expect(sub(0, 0)).toBe(0);
    expect(sub(10, 5)).toBe(5);
    expect(sub(4880, 498)).toBe(4382);
  });
});
