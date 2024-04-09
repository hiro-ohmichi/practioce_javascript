/*
2^7なら 
111(2)
となり
2^7 = (2^2)^2+ 2^2 + 2^1
と計算する

つまり2で割りつづけ、1余ったときにたす

指数が少数は考慮しない
*/

export function power(base: number, exponent: number) {
  if (exponent === 0) {
    return 1;
  }

  let exeExponent = Math.abs(exponent);
  let result = 1;
  let currBase = base;

  while (exeExponent > 0) {
    // あまりが1なら前の結果を１つ前の結果の2乗を加算 (2^2)^2+
    if (exeExponent % 2 === 1) {
      result *= currBase;
    }
    //1つ前の2乗を計算ex:(2^2)^2
    currBase *= currBase;
    exeExponent >>= 1;
  }

  return exponent < 0 ? 1 / result : result;
}
