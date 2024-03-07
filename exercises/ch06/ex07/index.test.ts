import { assign } from "./index.ts";

// テストするオブジェクト
const sourceObject = {
  a: 1,
  b: {
    c: 2,
  },
};

// Object.assign()を使用してコピーを作成
const copiedObject = assign({}, sourceObject);

// テスト
describe("Object.assign() behavior", () => {
  test("Original and Copy have the same keys", () => {
    expect(Object.keys(sourceObject)).toEqual(Object.keys(copiedObject));
  });
});
