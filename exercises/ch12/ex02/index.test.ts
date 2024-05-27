import { fibonacci2 } from "./index.js";
function* fibo() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

function fibonacci1(n: number) {
  for (let f of fibo()) if (n-- <= 0) return f;
}

describe("テスト", () => {
  test("test", () => {
    expect(fibonacci2(1)).toBe(fibonacci1(1));
    expect(fibonacci2(1)).toBe(fibonacci1(1));
    expect(fibonacci2(20)).toBe(fibonacci1(20));
    expect(fibonacci2(10)).toBe(fibonacci1(10));
  });
});
