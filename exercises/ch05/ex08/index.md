```
let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);
```

ex07と同様try,catchの後に必ずfinallyが動くのでcontinueし続けるのでループが回り切りx=5となる
