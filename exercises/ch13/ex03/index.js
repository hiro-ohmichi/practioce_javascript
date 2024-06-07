import * as fs from "node:fs";
export function mkdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, options, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// ディレクトリ A → B → C を順に作る以下のコード (※ エラーハンドリングは省略) を...
fs.mkdir("A", () => {
  fs.mkdir("B", () => {
    fs.mkdir("C", () => console.log("COMPLETED"));
  });
});

/*
// 以下のように書くことができる
mkdir("A")
  .then(() => mkdir("B"))
  .then(() => mkdir("C"))
  .then(() => console.log("COMPLETED"));
*/

export function readdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

export function stat(path, options) {
  return new Promise((resolve, reject) => {
    fs.stat(path, options, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

await mkdir("A")
  .then(() => mkdir("B"))
  .then(() => mkdir("C"))
  .then(() => console.log("COMPLETED"))
  .catch(() => console.log("ERROR1"));
await readdir("A")
  .then(() => mkdir("B"))
  .then(() => mkdir("C"))
  .then(() => console.log("COMPLETED"))
  .catch(() => console.log("ERROR2"));
await stat("A")
  .then(() => mkdir("B"))
  .then(() => mkdir("C"))
  .then(() => console.log("COMPLETED"))
  .catch(() => console.log("ERROR3"));
