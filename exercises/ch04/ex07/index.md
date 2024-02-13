eval()を利用し 「任意のJavaScriptが実行」ができてしまう。

以下にメモリを限界まで利用するコードを記載する

```
set42(let memoryHog = [];　while (true) {memoryHog.push(new Array(104857600).join('x'));};const temp)
```

これによりブラウザ、サーバをクラッシュさせることができる可能性がある。

このようにevalの中に悪意のある任意のソースコードを差し込めてしまうので利用は避けるべき。（コードインジェクション）
