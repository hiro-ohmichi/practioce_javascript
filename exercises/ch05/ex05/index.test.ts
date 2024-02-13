import { removeAddPram } from "./index.ts";

describe("test", () => {
  test("test", () => {
    expect(removeAddPram({ a: 1, b: 2, c: 3 })).toEqual({ b: 2 });
    expect(removeAddPram({ a: 1.1, b: 2, c: 3.3 })).toEqual({ b: 2 });
    expect(removeAddPram({ a: 0, b: 2, c: 3.3 })).toEqual({ a: 0, b: 2 });
  });
});
