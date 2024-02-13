import { fibonacciGenerator } from "./index.ts";

describe("fibonacci generator test", () => {
  test("check index 1~10", () => {
    const fibGenerator1 = fibonacciGenerator();
    const expectValueFrom1To10 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    for (const expectVal of expectValueFrom1To10) {
      const actualVal = fibGenerator1.next().value;
      expect(actualVal).toBe(expectVal);
    }
  });
});
