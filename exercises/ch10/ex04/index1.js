export default function showLogRename() {
  console.log("importできた");
}

export function showLog2Renam() {
  console.log("importできた2");
}

export function showLog3Renamess() {
  console.log("importできた3");
}
// 再エキスポート
export { showLog2Renam as reExportShowLog } from "./index1.js";
