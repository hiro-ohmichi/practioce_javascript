import {
  fibonacci10SequenceDoWhile,
  fibonacci10SequenceFor,
  fibonacci10SequenceWhile,
} from "./index.ts";

describe("isWeeklyHolidayIfElse test", () => {
  const expectArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  test("test all function", () => {
    expect(fibonacci10SequenceDoWhile()).toEqual(expectArray);
    expect(fibonacci10SequenceFor()).toEqual(expectArray);
    expect(fibonacci10SequenceWhile()).toEqual(expectArray);
  });
});
