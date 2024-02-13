１．絶対にundefinedにしたいときに利用していた
昔はundefinedは上書きができた

```
console.log(a === undefined) // true
console.log(a === void 0)    // true

// undefinedを上書き
var undefined = 100

console.log(a === undefined) // false
console.log(a === void 0)    // true
```

これを防ぐため。

2. 昔のブラウザだとundefinedがローカル変数として利用できた。そのため、意図せずローカル変数のほうを参照してしまう可能性があったため。

3. undefinedよりvoid 0のほうがファイルサイズが軽くなる。データ転送量を削減できる。

今ではvoid 0 が利用されなくなったのは1. 2. のケースはほぼ全てのブラウザでできないように対策された。3. 現代においては気にする必要がないレベルの削減にしかならないからと考えられる。

またvoid 0がでるとかっこわるいや、わかりにくいというのも見なくなった理由。
