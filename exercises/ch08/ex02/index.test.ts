import { power } from "./index.ts";
describe("累乗計算テスト", () => {
  test("4^3", () => {
    expect(power(4, 3)).toBe(64);
  });
  test("4^0", () => {
    expect(power(4, 0)).toBe(1);
  });
  test("2^23", () => {
    expect(power(2, 23)).toBe(8388608);
  });
  test("-2^5", () => {
    expect(power(-2, 3)).toBe(-8);
  });
  test("-2^(-2)", () => {
    expect(power(-2, -2)).toBe(1 / 4);
  });
});
