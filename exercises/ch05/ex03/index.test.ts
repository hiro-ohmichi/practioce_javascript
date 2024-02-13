import { isWeeklyHolidayIfElse, isWeeklyHolidaySwitch } from "./index.ts";

describe("isWeeklyHolidayIfElse test", () => {
  let logSpy: jest.SpyInstance; // スパイを格納する変数を定義
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log"); // 各テストの前にスパイを作成
  });
  afterEach(() => {
    logSpy.mockRestore(); // 各テストの後にスパイをリセット
  });
  test("月", () => {
    expect(isWeeklyHolidayIfElse("月")).toBe(false);
  });
  test("火", () => {
    expect(isWeeklyHolidayIfElse("火")).toBe(false);
  });
  test("水", () => {
    expect(isWeeklyHolidayIfElse("水")).toBe(false);
  });
  test("木", () => {
    expect(isWeeklyHolidayIfElse("木")).toBe(false);
  });
  test("金", () => {
    expect(isWeeklyHolidayIfElse("金")).toBe(false);
  });
  test("土", () => {
    expect(isWeeklyHolidayIfElse("土")).toBe(true);
  });
  test("日", () => {
    expect(isWeeklyHolidayIfElse("日")).toBe(true);
  });
  test("ああああ", () => {
    expect(isWeeklyHolidayIfElse("ああああ")).toBe(false);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});

describe("isWeeklyHolidaySwitch test", () => {
  let logSpy: jest.SpyInstance; // スパイを格納する変数を定義
  beforeEach(() => {
    logSpy = jest.spyOn(console, "log"); // 各テストの前にスパイを作成
  });
  afterEach(() => {
    logSpy.mockRestore(); // 各テストの後にスパイをリセット
  });
  test("月", () => {
    expect(isWeeklyHolidaySwitch("月")).toBe(false);
  });
  test("火", () => {
    expect(isWeeklyHolidaySwitch("火")).toBe(false);
  });
  test("水", () => {
    expect(isWeeklyHolidaySwitch("水")).toBe(false);
  });
  test("木", () => {
    expect(isWeeklyHolidaySwitch("木")).toBe(false);
  });
  test("金", () => {
    expect(isWeeklyHolidaySwitch("金")).toBe(false);
  });
  test("土", () => {
    expect(isWeeklyHolidaySwitch("土")).toBe(true);
  });
  test("日", () => {
    expect(isWeeklyHolidaySwitch("日")).toBe(true);
  });
  test("ああああ", () => {
    expect(isWeeklyHolidaySwitch("ああああ")).toBe(false);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});
