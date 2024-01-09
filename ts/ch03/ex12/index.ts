/* eslint-disable @typescript-eslint/no-explicit-any */
const obj1: Record<any, number> = { x: 1, y: 2, z: 3 };
const obj2: Record<any, number> = { x: 1, y: 2, z: 3 };
console.log(obj1 === obj2);

obj1.y2 = 3;
console.log(obj1.y2);

export function equals(
  obj1: Record<string, number>,
  obj2: Record<string, number>
) {
  const keys = Object.keys(obj1);
  for (const key of keys) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}
// lodashをインポートすれば_.isEqual(objectA, objectB);だけでできる
