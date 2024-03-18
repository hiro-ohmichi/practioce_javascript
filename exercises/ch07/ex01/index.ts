export function matrixAddition(matrix1: number[][], matrix2: number[][]) {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    throw new Error("行列の大きさに問題があります");
  }

  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];
    for (let j = 0; j < matrix1[0].length; j++) {
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    result.push(row);
  }
  return result;
}

export function matrixMultiplication(matrix1: number[][], matrix2: number[][]) {
  if (matrix1[0].length !== matrix2.length) {
    throw new Error("行列の大きさに問題があります");
  }

  const result: number[][] = [];
  // i,j,k の対応は次のサイトと同じになっているhttps://keisan.casio.jp/exec/system/1308269580
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}
