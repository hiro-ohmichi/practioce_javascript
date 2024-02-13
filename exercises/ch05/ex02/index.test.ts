import { escapeToStringIfElse, escapeToStringSwitch } from "./index.ts";

describe("test if else", () => {
  test("sample01", () => {
    expect(escapeToStringIfElse("abc\n\"def/'ghi\t\t\\\0\bjk\r\vlmn")).toBe(
      "abc\\n\\\"def/\\'ghi\\t'\\t'\\\\\\0\\b\"jk\\r\\vlmn"
    );
  });
});

describe("test switch", () => {
  test("sample01", () => {
    expect(escapeToStringSwitch("abc\n\"def/'ghi\t\t\\\0\bjk\r\vlmn")).toBe(
      "abc\\n\\\"def/\\'ghi\\t'\\t'\\\\\\0\\b\"jk\\r\\vlmn"
    );
  });
});
