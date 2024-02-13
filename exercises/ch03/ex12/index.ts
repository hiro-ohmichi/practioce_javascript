/* eslint-disable @typescript-eslint/no-explicit-any */
// Record に限定
const obj1: Record<any, number> = { x: 1, y: 2, z: 3 };
const obj2: Record<any, number> = { x: 1, y: 2, z: 3 };
console.log(obj1 === obj2);

obj1.y2 = 3;
console.log(obj1.y2);

export function equals(
  obj1: Record<string, number>,
  obj2: Record<string, number>
) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}
// lodashをインポートすれば_.isEqual(objectA, objectB);だけでできる
