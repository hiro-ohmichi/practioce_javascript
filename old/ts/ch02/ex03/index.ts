/*
>>> import unicodedata
>>> text = "パン"
>>> unicodedata.normalize("NFC",text).encode("utf-8")
b'\xe3\x83\x91\xe3\x83\xb3'
>>> unicodedata.normalize("NFD",text).encode("utf-8")
b'\xe3\x83\x8f\xe3\x82\x9a\xe3\x83\xb3'
utf-8? utf-16なのが気になる
>>> ^Z
*/

// パン
const text = "\u3071\u3093";

const nfc = text.normalize("NFC");
const nfd = text.normalize("NFD");

// Unicodeエスケープシーケンスに変換する関数
function stringToUnicodeEscape(s: string): string {
  return s
    .split("")
    .map((char) => `\\u${("000" + char.charCodeAt(0).toString(16)).slice(-4)}`)
    .join("");
}

// 見た目は同じだがunicodeが違う
console.log(nfc);
console.log(stringToUnicodeEscape(nfc));
console.log(nfd);
console.log(stringToUnicodeEscape(nfd));

//なんでこんなのいるの？正準等価性と互換等価性で判定したいときに利用する
