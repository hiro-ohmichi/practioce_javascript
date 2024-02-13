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
      console.log("%o", life);
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

> C:\Users\r00528257\OneDrive - Ricoh\ドキュメント\javascript講座\練習問題\exercises-main-exercises\exercises\ch01\ex05>npx ts-node charfreq.ts < negai_hitotsu.txt
> の: ##### 4.59%
> -: #### 3.71%
> い: #### 3.64%
> て: ### 2.80%
> 、: ### 2.73%
> と: ### 2.63%
> に: ## 2.43%
> し: ## 2.26%
> た: ## 2.19%
> は: ## 2.02%
> で: ## 1.75%
> か: ## 1.72%
> な: ## 1.62%
> 。: ## 1.59%
> が: ## 1.59%
> る: ## 1.55%
> れ: # 1.48%
> も: # 1.45%
> う: # 1.42%
> 人: # 1.42%
> す: # 1.35%
> ま: # 1.35%
> っ: # 1.28%
> を: # 1.28%
> り: # 1.21%
> ら: # 1.18%
> く: # 1.08%
> ち: # 1.05%

※nodejsがshift-jisに対応してないので、メモ帳で青空をutf-8に変更
