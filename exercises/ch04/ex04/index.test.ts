import { bitCount } from "./index.ts";
describe("function add", () => {
  test("some calculations", () => {
    expect(bitCount(0b111)).toBe(3);
    expect(bitCount(123)).toBe(6); //123 → 0111 1011
  });
});
