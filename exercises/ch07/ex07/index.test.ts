import { bubbleSort } from "./index.ts";

describe("test sort", () => {
  test("配列を正しくソートできるか", () => {
    const array1 = [1, 2, 6, 3, 5, 12, 32, 33, 31, 55, 0];
    expect(bubbleSort(array1)).toEqual([0, 1, 2, 3, 5, 6, 12, 31, 32, 33, 55]);
    const array2 = [0, 4, -1, 11, 0, -33, 100, -100];
    expect(bubbleSort(array2)).toEqual([-100, -33, -1, 0, 0, 4, 11, 100]);
    const array3 = [10, 10, 1, 1, 5];
    expect(bubbleSort(array3)).toEqual([1, 1, 5, 10, 10]);
  });
});
