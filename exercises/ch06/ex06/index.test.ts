import { getAllPropertyNames } from "./index.ts";

describe("test getAllPropertyNames", () => {
  test("test obj", () => {
    const testParentObj = {
      abc: 123,
      aaa: 456,
    };

    const testChildObject = Object.create(testParentObj);
    testChildObject.a = 1;
    testChildObject.b = 1;
    const symbolProp1 = Symbol("symbolProp");
    const symbolProp2 = Symbol("symbolProp");
    testChildObject[symbolProp1] = "symbolPropValue";
    testChildObject[symbolProp2] = "symbolPropValue";

    expect(getAllPropertyNames(testChildObject)).toEqual([
      "a",
      "b",
      "0", //symbolPropになぜかならない
      "1", //symbolPropになぜかならない
      "length",
      "abc",
      "aaa",
    ]);
  });
  test("test class", () => {
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

    const childInstance = new Child("Hello", 42);

    expect(getAllPropertyNames(childInstance)).toEqual([
      "parentProp1",
      "childProp1",
      "length",
    ]);
  });
});

//オブジェクトは子→親の順番で検索されるが、クラスは親→子で検索される
