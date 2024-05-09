import { cache, slowFn } from "./index.js";

describe("テスト", () => {
  test("test", () => {
    const a = cache(slowFn);
    console.log("開始");
    console.log(a({ w: 1 }));
    console.log("一回目終了");
    console.log(a({ w: 1 }));
    console.log(a({ w: 1 }));
    console.log(a({ w: 1 }));
    console.log(a({ d: 4 }));
    expect(a({ w: 1 })).toBe(30000);
  });
});
