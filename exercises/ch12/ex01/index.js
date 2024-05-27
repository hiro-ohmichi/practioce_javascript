function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

// イテレータの生成
const iter = counterIter("");
console.log("定義した。");
// イテレータの実行
for (let value of iter) {
  console.log(value); // 値を出力
}
// let result = iter.next();の後、result.valueでもいける
console.log(iter.next()); // { value: 1, done: false }

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
}

console.log("ここから別の関数");

// ジェネレータの生成
const gen = counterGen(5);

// ジェネレータの手動呼び出し
let result = gen.next();
while (!result.done) {
  console.log(result.value); // 値を出力
  result = gen.next(); // 次の値を取得
}
