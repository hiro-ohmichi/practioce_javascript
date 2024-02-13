// Symbolという箱を共有している同じ値でも同じ値が入らない(かっこの中は説明文みたいなもの)みんなで使うオブジェクトみたいなもの
const sym1 = Symbol("aiueo");
const sym2 = Symbol("aiueo");

const obj1 = {
  [sym1]: "val1",
  [sym2]: "val2",
};

console.log(obj1[sym1]); // "val1"
console.log(obj1[sym2]); // "val2"

const sym3 = Symbol.for("aiueo");
const sym4 = Symbol.for("aiueo");

const obj2 = {
  [sym3]: "val1",
  [sym4]: "val2",
};

console.log(obj2[sym3]); // "val2"
console.log(obj2[sym4]); // "val2"
//Symbol.for はただの文字列になるので同じになる
