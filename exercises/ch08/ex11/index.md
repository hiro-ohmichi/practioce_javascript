console.log(sum.toString());
// Expected output: "function sum(a, b) {
// return a + b;
// }"

console.log(Math.abs.toString());
// Expected output: "function abs() { [native code] }"

自作関数は関数の中身がstringで結果がかえってきて、組み込み関数がfunction 名前{ [native code] }とかえってきた
