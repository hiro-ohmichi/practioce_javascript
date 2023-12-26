# 練習問題: 1 章

## 問題 1.1 💻

hello.js を作成し Node.js で実行し「Hello, World!」が表示されることを確認しなさい。

**出題範囲**: 1.2

## 問題 1.2 💻

hello.html および hello.js を作成し、hello.html を Web ブラウザで開くと開発者ツールのコンソール上に「Hello, World!」が表示されることを確認しなさい。

index.html　参照

**出題範囲**: 1.2

## 問題 1.3 🖋️

Web ブラウザに以下の URL のブックマークを追加しなさい。追加したブックマークを開くと何が起こるか確認し結果を記載しなさい。

```text
javascript:alert("Hello, World!")
```

![Alt text](image.png)

**参考**: [Bookmarklet という一番身近な自動化技術](https://blog.jxck.io/entries/2018-01-12/let-it-bookmarklet.html#bookmarklet)

## 問題 1.4 🖋️

以下の内容を index.html に保存し、Web ブラウザで開きなさい。
開発者ツール (Chrome の場合 F12) のコンソール上に何が表示されるか予想し、結果が一致するか確認しなさい。
開発者ツールを開いた状態のタブで HTML を開く場合と、HTML を開いた状態のタブで開発者ツールを開く場合とで、結果を比較しなさい。
また、常に期待した結果を得るためにはどのようにコードを修正すべきか答えなさい。

```html
<!doctype html>
<html>
  <body>
    <script>
      let life = { answer: 42 };
      console.log(life);
      life.answer = 0;
      console.log(life);
    </script>
  </body>
</html>
```

インスタンス変数にアクセスする

```
console.log(life.answer);
```

**出題範囲**: 1.3

## 問題 1.8 💻🖋️

文字頻度ヒストグラムのプログラムを自分で書き、[青空文庫](https://www.aozora.gr.jp/) の適当な書籍に対して実行し、結果を記載しなさい。
