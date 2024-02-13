/*
FiZZBuzz問題とは
– 2人以上のプレイヤーが1から順番に数字を発言していく
– 3で割り切れるときは「Fizz」を発言
– 5で割り切れるときは「Buzz」を発言
– 両方で割り切れるときは「FizzBuzz」を発言
– 間違えた人から脱落
細かな違いはあるでしょうが大体上記のようなルールのゲームです。
*/
// prettier-ignore
export function fizzbuzz() {let result = "";for (var i = 1; i <= 100; i++) {result += i % 3 === 0 && i % 5 === 0 ? "FizzBuzz": i % 3 === 0? "Fizz": i % 5 === 0? "Buzz": i;result += "\n"; } return result;}
