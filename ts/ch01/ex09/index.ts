class DefaultMapCustom extends Map {
  defaultValue: number | string;
  constructor(defaultValue: number | string) {
    super(); // Mapのコンストラクタをnewキーワードを使って呼び出す
    this.defaultValue = defaultValue;
  }

  get(key: number | string) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}

class WordHistogram {
  totalLetters: number;
  letterCounts: DefaultMapCustom;
  constructor() {
    this.letterCounts = new DefaultMapCustom(0);
    this.totalLetters = 0;
  }

  add(text: string) {
    const matches = text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
    const words = [...matches].map((r) => r[0]);
    for (const word of words) {
      const count = this.letterCounts.get(word);
      this.letterCounts.set(word, count + 1);
      this.totalLetters++;
    }
  }

  toString() {
    //let entries = [...this.letterCounts];
    let entries = Array.from(this.letterCounts);

    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    for (const entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    entries = entries.filter((entry) => entry[1] >= 0.5);
    // padStart で表示幅を揃える / # の数を n ではなく 10 * n に変更
    const lines = entries.map(
      ([l, n]) =>
        `${l.padStart(10)}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`
    );

    return lines.join("\n");
  }
}

async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  const histogram = new WordHistogram();
  for await (const chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}
histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});
