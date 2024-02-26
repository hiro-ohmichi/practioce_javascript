import { getAllPropertyNames } from "./index.ts";

class Parent {
  parentProp1: string;
  constructor(prop1: string) {
    this.parentProp1 = prop1;
  }
}

class Child extends Parent {
  childProp1: number;
  constructor(prop1: string, prop2: number) {
    super(prop1);
    this.childProp1 = prop2;
  }
}

const symbolProp = Symbol("symbolProp");

const testObj = {
  a: 1,
  b: 2,
  [symbolProp]: "symbolPropValue",
};

const childInstance = new Child("Hello", 42);

describe("test getAllPropertyNames", () => {
  test("test include symbol object", () => {
    expect(getAllPropertyNames(testObj)).toEqual(["a", "b", "symbolPropValue"]);
  });
  test("test include child object", () => {
    expect(getAllPropertyNames(childInstance)).toBe([
      "childProp1",
      "parentProp1",
    ]);
  });
});
