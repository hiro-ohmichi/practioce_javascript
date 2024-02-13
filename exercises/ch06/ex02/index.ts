// オブジェクトリテラルで定義されたオブジェクト
const parentObject = {
  x: 1,
  y: 2,
};

// Object.createを使用して継承オブジェクトを生成
const childObject = Object.create(parentObject);

// childObjectのプロトタイプがparentObjectであることを確認
console.log(Object.getPrototypeOf(childObject) === parentObject); // true

childObject.x = 3;
console.log(parentObject.x);
console.log(childObject.x);
