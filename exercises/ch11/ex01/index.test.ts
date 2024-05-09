import { TypeMap } from "./index.js";

describe("テスト", () => {
  test("test", () => {
    class Foo {}

    const typeMap = new TypeMap();
    typeMap.set(Foo, new Foo());
    typeMap.set(String, "string");
    typeMap.set(Number, 123);
    expect(typeMap.set(Date, "not a date")).toThrow();
    expect(typeMap.get(String)).toBe("string");
    expect(typeMap.get(Number)).toBe(123);
  });
});
