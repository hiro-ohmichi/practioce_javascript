// 整数の最大値
console.log(Number.MAX_SAFE_INTEGER);
// 整数の最小値
console.log(Number.MIN_SAFE_INTEGER);
// 最大値 + 1
console.log(Number.MAX_SAFE_INTEGER + 1);

console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);

/*
9007199254740991
-9007199254740991
9007199254740992
true
原因：オーバーフローしているから
*/
