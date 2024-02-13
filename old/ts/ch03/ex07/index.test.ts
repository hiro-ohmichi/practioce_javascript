/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { equalArrays } from "./index.ts";
describe("test equal object", () => {
  test("same value same order ", () => {
    expect(equalArrays(null, undefined)).toBe(true);
  });
});
