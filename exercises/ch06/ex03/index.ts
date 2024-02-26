type ObjInfo = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
let o: ObjInfo = {};
o.x = 1;
let p = Object.create(o);
let pp = { ...o };
console.log(Object.prototype.isPrototypeOf.call(o, pp));

p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
console.log(f);
console.log(q.x + q.y);

console.log(Object.prototype.isPrototypeOf.call(o, p));
console.log(Object.prototype.isPrototypeOf.call(o, q));
console.log(Object.prototype.isPrototypeOf.call(p, q));

// q.prototype.isPrototypeOf(o);だとDo not access Object.prototype method 'isPrototypeOf' from target object.とでるので利用しない

//質問 Object.create(o)と {...o}なにか違うのか A. 継承していない。つまりは動作をする全くの別人を定義するということになる

//ここから`Object`, `Array`, `Date`, `Map` のプロトタイプチェーン
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function printPrototypeChain(obj: any) {
  let currentObj = obj;
  while (currentObj) {
    currentObj = Object.getPrototypeOf(currentObj);
    console.log(currentObj?.constructor.name);
  }
}

const valuableConstructor: ObjInfo = {
  Object: {},
  Array: [],
  Date: new Date(),
  Map: new Map(),
};

for (const constructor in valuableConstructor) {
  console.log(`${constructor}のプロトタイプチェーン`);
  printPrototypeChain(valuableConstructor[constructor]);
}
