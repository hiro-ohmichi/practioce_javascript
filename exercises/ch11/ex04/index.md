p305でunit8Array()を使ったほうが早かったと記載されている、こちらで型を指定することで、型チェックの時間、メモリが連続領域に入ることが保証されるのでtypedArrayMultiplyのほうが早くなると予想した。

しかし結果は
arrayMultiply: 1901.4325999990106
typedArrayMultiply: 2245.5507000014186
となり、通常の処理のほうが早とという結果になった。Float64Arrayは通常の数値型なので、下手にこっちで指定するより任せたほうが早いのかなと疑問に思った。