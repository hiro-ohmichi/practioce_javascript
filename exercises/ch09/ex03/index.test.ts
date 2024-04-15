import { C, Cc } from "./index.ts";

describe("クラステスト", () => {
  test("プライベートフィールドを利用しているクラス", () => {
    const classC = new C();
    expect(classC.getX).toBe(42);
    expect(classC.x).toBe(undefined);
  });

  test("クロージャ関数を利用しているクラス", () => {
    const classCc = new Cc();
    expect(classCc.getX).toBe(42);
    expect(classCc.x).toBe(undefined);
  });
});
