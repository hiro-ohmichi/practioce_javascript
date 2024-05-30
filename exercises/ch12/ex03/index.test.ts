import { counter } from "./index.js";

describe("テスト", () => {
  test("test", () => {
    const myCounter = counter();
    expect(myCounter.next().value).toBe(0);
    expect(myCounter.next().value).toBe(1);
    expect(myCounter.next().value).toBe(2);
    expect(myCounter.throw("reset").value).toBe(0); //カウンタリセット
    expect(myCounter.next().value).toBe(1);
    expect(myCounter.next().value).toBe(2);
  });
});
