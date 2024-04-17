import { MagicWarrior, Warrior, MagicWarrior2, Warrior2 } from "./index.js";
//うまくimportできない
describe("test object", () => {
  test("warriorクラス", () => {
    const warriorClass = new Warrior(123);
    expect(warriorClass.attack()).toBe(246);
  });

  test("magicWorrierクラス", () => {
    const magicWarriorClass = new MagicWarrior(123, 11);
    expect(magicWarriorClass.attack()).toBe(257);
  });

  test("warrior2クラス", () => {
    const warriorClass2 = new Warrior2(123);
    expect(warriorClass2.attack()).toBe(246);
  });

  test("magicWorrier2クラス", () => {
    const magicWarriorClass2 = new MagicWarrior2(123, 11);
    expect(magicWarriorClass2.attack()).toBe(257);
  });
});
