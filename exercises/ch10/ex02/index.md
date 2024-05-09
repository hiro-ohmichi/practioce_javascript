CommonJS (CJS):
CommonJSは、サーバーサイドやウェブブラウザ環境外でのJavaScriptの各種仕様を定めるプロジェクトです。Node.jsなどで広く使われています1.
Node.jsはデフォルトで全てのモジュールをCommonJSで扱いますが、最近のバージョンではES Modulesにも対応しています
モジュールを呼び出す際はrequireを使用します。

ECMA Script Modules (ES Modules): 最近はこれ
ES Modulesは、ECMAScript（エクマスクリプト）の仕様で定められたモジュール方式です。ウェブブラウザもES Modulesをサポートしています
Node.jsではデフォルトで全てのモジュールをCommonJSで扱うため、以下のいずれかの対応でモジュールシステムを変える必要があります:
package.jsonに"type": "module"を追加し、mainを設定する。
実行時に--input-type=moduleオプションを付けて実行する。
.mjsに拡張子を変える1

その他のモジュール方式:
他にもAMD (Asynchronous Module Definition)
非同期的に読み込みます。CommonJS がサーバー向けであるのに対して、 AMD はブラウザ向けです。

```
// Import
define(["sample"], function (sample) {
    sample();
});

// Export
define(function () {
    return function example(){
        return "example"
    };
});
```

UMD (Universal Module Definition)
MD は CommonJS と AMD の両対応、すなわちサーバーでもブラウザでも動きます。ユニバーサル。 サーバー/ブラウザ問わず動くということから、ライブラリなどの成果物として利用されることがある
```
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function example() {
        return "example";
    }
    exports.default = example;
});
```