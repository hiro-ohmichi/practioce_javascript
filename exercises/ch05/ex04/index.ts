// 配列で返すとする
export function fibonacci10SequenceWhile(): number[] {
  // 初項と第2項を設定
  const fibSequence: number[] = [1, 1];
  // ループを使って次の項を生成し、配列に追加する
  while (fibSequence.length < 10) {
    const nextTerm =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextTerm);
  }
  return fibSequence;
}

export function fibonacci10SequenceFor(): number[] {
  const fibSequence: number[] = [1, 1];

  // フィボナッチ数列の残りの要素を生成し、配列に追加する
  for (let i = 2; i < 10; i++) {
    const nextTerm: number = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextTerm);
  }

  return fibSequence;
}

export function fibonacci10SequenceDoWhile(): number[] {
  // 初項と第2項を設定
  const fibSequence: number[] = [1, 1];
  // ループを使って次の項を生成し、配列に追加する
  do {
    const nextTerm =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextTerm);
  } while (fibSequence.length < 10);
  return fibSequence;
}
