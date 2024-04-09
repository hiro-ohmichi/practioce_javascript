// n:繰り返す回数、c:繰り返す、文字
export const fnArray = (n: number, c: string) => {
  const resultArray = Array(n).fill(c);
  resultArray.forEach((val) => console.log(val));
  return resultArray;
};

// 数値nの2乗を返す
export const nSquared = (n: number) => {
  return n ** 2;
};

// 現在時刻をDate型で取得する
export const nowTimeObj = () => {
  const result = { now: new Date() };
  return result;
};
