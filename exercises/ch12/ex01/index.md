### conterIter()の動作
まず関数が実行 `const iter= conterIter(5)`されたとき,functionとして通常通りイテレータ以外の動作する。そのため
`counterIter`が表示される。
次にfor-ofなどでnext()を飛び出された場合は、まずイテレータメソッドを呼び出して、イテレータオブジェクトを取得。次にイテレータオブジェクトのnext()メソッド呼び出す。
そのため最初の一回のみ`counterIter: Symbol.iterator`が表示され、以後、
```
counterIter: next
1...
```
と動作する。

### conterGen()の動作
上記のconterIter()と動作は同じ。しかし、ジェネレータを使っているため、内部的にイテレータプロトコルを自動的に処理する。yieldで自動停止する仕組みになっている。