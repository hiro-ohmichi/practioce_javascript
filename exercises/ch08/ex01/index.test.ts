import { fnArray, nSquared, nowTimeObj } from "./index.ts";

describe("test function", () => {
  test("1. の関数", () => {
    const spy = jest.spyOn(console, "log");
    const n = 4;
    const c = "ai";
    expect(fnArray(n, c)).toEqual(["ai", "ai", "ai", "ai"]);
    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy).toHaveBeenNthCalledWith(1, "ai");
    expect(spy).toHaveBeenNthCalledWith(2, "ai");
    expect(spy).toHaveBeenNthCalledWith(3, "ai");
    expect(spy).toHaveBeenNthCalledWith(4, "ai");
    spy.mockRestore();
  });
  test("2. の関数", () => {
    const x = 11;
    expect(nSquared(x)).toBe(121);
  });
  test("3. の関数", () => {
    expect(nowTimeObj()).toEqual({ now: new Date() });
  });
});
