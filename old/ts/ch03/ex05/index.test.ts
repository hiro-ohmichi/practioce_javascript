import { convertCRLFtoLF, convertLFtoCRLF } from "./index.ts";
describe("test new line", () => {
  test("LF to CRLF", () => {
    const inputString = "こんにちは\n今日は1月の1日です.\n";
    const expectString = "こんにちは\r\n今日は1月の1日です.\r\n";
    expect(convertLFtoCRLF(inputString)).toBe(expectString);
  });

  test("CRLF to LF", () => {
    const inputString = "こんにちは\r\n今日は1月の1日です.\r\n";
    const expectString = "こんにちは\n今日は1月の1日です.\n";
    expect(convertCRLFtoLF(inputString)).toBe(expectString);
  });
});
