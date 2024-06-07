import { readLines } from "./index.js";

describe("テスト", () => {
  test("test", () => {
    const filePath =
      "C:\\Users\\r00528257\\OneDrive - Ricoh\\ドキュメント\\javascript講座\\練習問題\\exercises-main-exercises\\exercises\\exercises\\ch12\\ex05\\test.txt";
    // ジェネレータ関数の動作テスト(長いと文字化けする)
    const reads = readLines(filePath, 100);
    expect(reads.next().value).toBe("こんにちは。");
    expect(reads.next().value).toBe("動作");
    expect(reads.next().value).toBe("テスト");
    expect(reads.next().value).toBe("をする。");
  });
});
