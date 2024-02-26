type ObjInfo = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string | number]: any;
};
const object1: ObjInfo = new Object();

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
  configurable: false,
  enumerable: false,
});

const object2: ObjInfo = new Object();
Object.defineProperty(object2, "property1", {
  value: 42,
  writable: true,
  configurable: true,
  enumerable: true,
});

const objs: ObjInfo[] = [object1, object2];

let count = 1;
for (const obj of objs) {
  console.log("object" + count + "の結果です");
  count++;

  console.log("変更前");

  console.log(
    `hasOwnPropertyの結果は${Object.prototype.hasOwnProperty.call(
      obj,
      "property1"
    )}です`
  );

  console.log(
    `propertyIsEnumerableの結果は${Object.prototype.propertyIsEnumerable.call(
      obj,
      "property1"
    )}です`
  );

  try {
    obj.property1 = 111;
    console.log("プロパティの値を変更しました");

    console.log(obj.property1);
  } catch (error) {
    console.log("writableがfalseなので変更不可です");
    console.log(obj.property1);
  }

  try {
    delete obj.property1;
    console.log("プロパティを削除しました");

    console.log(obj.property1);
  } catch (error) {
    console.log("configurableがfalseなので変更不可です");
    console.log(obj.property1);
  }

  console.log("変更後");

  console.log(
    `hasOwnPropertyの結果は${Object.prototype.hasOwnProperty.call(
      obj,
      "property1"
    )}です`
  );

  console.log(
    `propertyIsEnumerableの結果は${Object.prototype.propertyIsEnumerable.call(
      obj,
      "property1"
    )}です`
  );
}
