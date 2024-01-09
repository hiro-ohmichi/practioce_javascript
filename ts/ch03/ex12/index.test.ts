import { equals } from "./index.ts";
describe("test equal object", () => {
  test("same value same order ", () => {
    const obj1 = { x: 1, y: 2, z: 3 };
    const obj2 = { x: 1, y: 2, z: 3 };
    expect(equals(obj1, obj2)).toBe(true);
  });
  test("same value different order ", () => {
    const obj1 = { z: 3, y: 2, x: 1 };
    const obj2 = { x: 1, y: 2, z: 3 };
    expect(equals(obj1, obj2)).toBe(true);
  });
  test("different value different order ", () => {
    const obj1 = { z: 23, y: 32, x: 1 };
    const obj2 = { x: 1, y: 2, z: 3 };
    expect(equals(obj1, obj2)).toBe(false);
  });
});
