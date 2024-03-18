import { matrixAddition, matrixMultiplication } from "./index.ts";

describe("test calculate matrix", () => {
  test.each`
    matrix1                         | matrix2                             | expectResult
    ${[[1, 2, 3, 4], [6, 7, 8, 9]]} | ${[[0, 1], [2, 3], [4, 5], [6, 7]]} | ${[[40, 50], [100, 130]]}
    ${[[1, 2, 3, 4]]}               | ${[[0, 1], [2, 3], [4, 5], [6, 7]]} | ${[[40, 50]]}
    ${[[1, 2, 3, 4], [6, 7, 8, 9]]} | ${[[0], [2], [4], [6]]}             | ${[[40], [100]]}
  `(
    "正しく掛け算できるか matrix1:$matrix1 , matrix2:$matrix2",
    ({ matrix1, matrix2, expectResult }) => {
      expect(matrixMultiplication(matrix1, matrix2)).toEqual(expectResult);
    }
  );

  test.each`
    matrix1                         | matrix2                                 | expectResult
    ${[[1, 2, 3, 4], [6, 7, 8, 9]]} | ${[[11, 22, 33, 44], [66, 77, 88, 99]]} | ${[[12, 24, 36, 48], [72, 84, 96, 108]]}
    ${[[1, 2, 3, 4]]}               | ${[[0, 1, 55, 574]]}                    | ${[[1, 3, 58, 578]]}
    ${[[1, 2], [8, 9]]}             | ${[[1, 2], [38, 93]]}                   | ${[[2, 4], [46, 102]]}
  `(
    "正しく足し算できるか matrix1:$matrix1 , matrix2:$matrix2",
    ({ matrix1, matrix2, expectResult }) => {
      expect(matrixAddition(matrix1, matrix2)).toEqual(expectResult);
    }
  );
});
