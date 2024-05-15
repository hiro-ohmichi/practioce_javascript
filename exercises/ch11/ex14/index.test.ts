import { sortJapanese, toJapaneseDateString } from "./index.js";

describe("テスト", () => {
  test("ソートtest", () => {
    // テスト用のサンプルデータ
    const sampleData1 = ["おお", "ああ", "い", "わ", "ん", "る"];
    expect(sortJapanese(sampleData1)).toEqual([
      "ああ",
      "い",
      "おお",
      "る",
      "わ",
      "ん",
    ]);
    const sampleData2 = ["ぜ", "せ", "す", "ず", "が", "か"];
    expect(sortJapanese(sampleData2)).toEqual([
      "が",
      "か",
      "す",
      "ず",
      "ぜ",
      "せ",
    ]);
  });
  test("和暦表示テストtest", () => {
    const testDate1 = new Date("2024-05-01");
    expect(toJapaneseDateString(testDate1)).toBe("令和6年5月1日");
    const testDate2 = new Date("2027-01-01");
    expect(toJapaneseDateString(testDate2)).toBe("令和9年1月1日");
  });
});
