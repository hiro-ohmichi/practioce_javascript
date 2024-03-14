import { obj } from "./index.ts";

const importObj = obj;

// 浮動小数点同士のequalかを評価する
function evalFloatNum(actualNum: number, expectNum: number) {
  expect(Math.abs(actualNum - expectNum) < Number.EPSILON).toBeTruthy;
}

describe("test", () => {
  test.each`
    r    | theta                | expectX                    | expectY
    ${4} | ${Math.PI / 3}       | ${2}                       | ${2 * Math.sqrt(3)}
    ${3} | ${(Math.PI * 5) / 6} | ${(-3 * Math.sqrt(3)) / 2} | ${3 / 2}
  `(
    "オブジェクトのx,yが正しくgetできるか r:$r ,theta:$theta ",
    ({ r, theta, expectX, expectY }) => {
      importObj.r = r;
      importObj.theta = theta;
      evalFloatNum(importObj.x, expectX);
      evalFloatNum(importObj.y, expectY);
    }
  );

  test("xにNANを設定するとエラーを返すか", () => {
    expect(() => (importObj.x = NaN)).toThrow("Nanが設定されました");
  });
  test("yにNANを設定するとエラーを返すか", () => {
    expect(() => (importObj.y = NaN)).toThrow("Nanが設定されました");
  });
});
