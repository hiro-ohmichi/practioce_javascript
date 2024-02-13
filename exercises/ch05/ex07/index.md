```
function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());
```

と書いた場合tryの後に必ずfinally部分が実行されるので、try内のreturnでは止まらず、finallyのfalseが出力される。

Unsafe usage of ReturnStatement.というエラーがでるのでこのような書きかたはしない
