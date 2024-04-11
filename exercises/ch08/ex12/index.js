//(a,b,c) =>{a+b+c} を $1,$2,$3

export function f(str) {
  // 引数の文字列から$0と$10を取り出す正規表現
  const temp = [];
  const regex = /\$(10|[1-9])/g;
  // $0と$1を見つけて置換する
  const replacedStr = str.replace(regex, (match) => {
    const index = parseInt(match.slice(1)) - 1; // 変数のインデックスを取得する
    const replaceWord = String.fromCharCode(97 + index);
    temp.push(replaceWord);
    return replaceWord; // アルファベットに変換する
  });
  const args = [...new Set(temp)].sort();
  // パラメーター名を持つ関数を作成する
  return replacedStr.includes("return")
    ? new Function(...args, `${replacedStr};`)
    : new Function(...args, `return ${replacedStr};`);
}
