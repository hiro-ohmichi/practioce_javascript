function fizzbuzz(n: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const row: any[] = Array.from({ length: n }, (_, index) => index + 1);
  let modifiedRow = row.map((val) => (val % 15 === 0 ? "FizzBuzz" : val));
  modifiedRow = modifiedRow.map((val) => (val % 3 === 0 ? "Fizz" : val));
  modifiedRow = modifiedRow.map((val) => (val % 5 === 0 ? "Buzz" : val));
  modifiedRow.map((val) => console.log(val));
}
fizzbuzz(20);

function sumOfSquaredDifference(f: number[], g: number[]) {
  return f.reduce((result, currentVal, index) => {
    return result + (currentVal - g[index]) ** 2;
  }, 0);
}
const ff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const gg = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(sumOfSquaredDifference(ff, gg));

function sumOfEvensIsLargerThan42(array: number[]) {
  const onlyEvenVal = array.filter((val, index) => index % 2 !== 0);
  const accumulatedArray = onlyEvenVal.reduce((acc: number[], currentVal) => {
    const prevVal = acc.length > 0 ? acc[acc.length - 1] : 0; // 前の要素の値を取得
    const sum = prevVal + currentVal; // 前の要素と現在の要素を足す
    return [...acc, sum]; // 新しい配列に追加して返す
  }, []);
  return accumulatedArray.some((val) => val >= 42);
}

console.log(sumOfEvensIsLargerThan42([1, 2, 4]));
console.log(sumOfEvensIsLargerThan42([1, 2, 3, 123, -222223]));
