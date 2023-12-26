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

class Histogram {
  totalLetters: number;
  letterCounts: DefaultMapCustom;
  constructor() {
    this.letterCounts = new DefaultMapCustom(0);
    this.totalLetters = 0;
  }

  add(text: string) {
    text = text.replace(/\s/g, "").toUpperCase();
    for (const char of text) {
      const count = this.letterCounts.get(char);
      this.letterCounts.set(char, count + 1);
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

    entries = entries.filter((entry) => entry[1] >= 1);

    const lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    return lines.join("\n");
  }
}

async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  const histogram = new Histogram();
  for await (const chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}
histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});
