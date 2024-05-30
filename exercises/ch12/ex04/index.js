export function* primeGenerator() {
  //無限にする方法が不明
  const max = 10000;
  let numberArray = new Array(max).fill(true);
  numberArray[0] = true;
  const floorNum = Math.floor(Math.sqrt(max));
  for (let i = 2; i < floorNum; i++) {
    if (numberArray[i] === true) {
      yield i;
      for (let j = i * i; j < max; j += i) {
        numberArray[j] = false;
      }
    }
  }
}
