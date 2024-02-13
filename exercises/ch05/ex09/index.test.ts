import { convertToJson } from "./index.ts";

describe("test", () => {
  test("test:success pattern", () => {
    expect(convertToJson('{"key": "value","kkk": "pp"}')).toBe(
      '{"success":true,"data":{"key":"value","kkk":"pp"}}'
    );
  });
  test("test:fail pattern", () => {
    expect(convertToJson("こんにちは")).toBe(
      '{"success":false,"error":"Unexpected token こ in JSON at position 0"}'
    );
  });
});
