import { getDaysInMonth, countsWeekdays, getWeekday } from "./index.ts";

describe("テスト", () => {
  test("特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数test", () => {
    expect(getDaysInMonth(2023, 2)).toBe(28);
    expect(getDaysInMonth(2024, 2)).toBe(29);
    expect(getDaysInMonth(2024, 5)).toBe(31);
  });
  test("期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数test", () => {
    expect(countsWeekdays("2024-02-01", "2024-02-28")).toBe(20);
  });
  test("'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数test", () => {
    expect(getWeekday("2024-05-14", "ja-JP")).toBe("火曜日");
    expect(getWeekday("2024-05-14", "de-DE")).toBe("Dienstag");
    expect(getWeekday("2024-05-14", "en-US")).toBe("Tuesday");
    expect(getWeekday("2024-05-14", "ko")).toBe("화요일");
  });
});
