export function numbersEqual(value1: number, value2: number): boolean {
  const epsilon = 1e-10;
  // 数値の差を計算し、誤差が範囲内であれば同値とみなす
  const difference = Math.abs(value1 - value2);
  return difference < epsilon;
}

//他にも整数にして計算する方法がある（オーバーフロー注意）
