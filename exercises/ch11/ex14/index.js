export function sortJapanese(arr) {
  // Intl.Collatorを利用して、オプションを指定
  const collator = new Intl.Collator("ja", {
    sensitivity: "base", // 基本的な違いのみを区別
    ignorePunctuation: true, // 句読点を無視
  });
  return arr.sort(collator.compare);
}

export function toJapaneseDateString(date) {
  const options = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(date);
}
