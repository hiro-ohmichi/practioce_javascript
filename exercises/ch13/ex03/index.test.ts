import { mkdir, readdir, stat } from "./index.js";

describe("テスト", async () => {
  await mkdir("A")
    .then(() => mkdir("B"))
    .then(() => mkdir("C"))
    .then(() => console.log("COMPLETED"))
    .catch(() => console.log("ERROR"));
  await readdir("A")
    .then(() => mkdir("B"))
    .then(() => mkdir("C"))
    .then(() => console.log("COMPLETED"))
    .catch(() => console.log("ERROR"));
  await stat("A")
    .then(() => mkdir("B"))
    .then(() => mkdir("C"))
    .then(() => console.log("COMPLETED"))
    .catch(() => console.log("ERROR"));
});
