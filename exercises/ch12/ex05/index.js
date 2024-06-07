import { openSync, readSync, closeSync } from "fs";

export function* readLines(filePath, bufferSize) {
  const buffer = Buffer.alloc(bufferSize);
  let fileDescriptor;
  let filePosition = 0;
  let leftover = "";

  try {
    fileDescriptor = openSync(filePath, "r");
    let bytesRead;

    while (
      (bytesRead = readSync(
        fileDescriptor,
        buffer,
        0,
        bufferSize,
        filePosition
      )) > 0
    ) {
      filePosition += bytesRead;
      const chunk = leftover + buffer.toString("utf8", 0, bytesRead);
      const lines = chunk.split("\n");
      //最後の要素を次に持ち込む
      leftover = lines.pop();

      for (const line of lines) {
        yield line;
      }
    }

    if (leftover) {
      yield leftover;
    }
  } finally {
    if (fileDescriptor !== undefined) {
      closeSync(fileDescriptor);
    }
  }
}

const filePath =
  "C:\\Users\\r00528257\\OneDrive - Ricoh\\ドキュメント\\javascript講座\\練習問題\\exercises-main-exercises\\exercises\\exercises\\ch12\\ex05\\test.txt";
// ジェネレータ関数の動作テスト
try {
  for (const line of readLines(filePath, 64)) {
    console.log(line);
  }
} catch (err) {
  console.error("Error:", err);
}
