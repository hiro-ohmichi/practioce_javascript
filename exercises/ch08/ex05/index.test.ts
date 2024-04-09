import { sequenceToObject } from "./index.ts";
describe("関数テスト", () => {
  test("example test", () => {
    expect(sequenceToObject("a", 1, "b", 2)).toEqual({ a: 1, b: 2 });
  });
});
