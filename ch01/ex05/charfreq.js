"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
class DefaultMapCustom extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }
    get(key) {
        if (this.has(key)) {
            return super.get(key);
        }
        else {
            return this.defaultValue;
        }
    }
}
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMapCustom(0);
        this.totalLetters = 0;
    }
    add(text) {
        text = text.replace(/\s/g, "").toUpperCase();
        for (const char of text) {
            const count = this.letterCounts.get(char);
            this.letterCounts.set(char, count + 1);
            this.totalLetters++;
        }
    }
    toString() {
        //let entries = Array.from(this.letterCounts);
        let entries = [...this.letterCounts];
        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            }
            else {
                return b[1] - a[1];
            }
        });
        for (const entry of entries) {
            entry[1] = (entry[1] / this.totalLetters) * 100;
        }
        entries = entries.filter((entry) => entry[1] >= 1);
        const lines = entries.map(([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);
        return lines.join("\n");
    }
}
function histogramFromStdin() {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        process.stdin.setEncoding("utf-8");
        const histogram = new Histogram();
        try {
            for (var _d = true, _e = __asyncValues(process.stdin), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                _c = _f.value;
                _d = false;
                const chunk = _c;
                histogram.add(chunk);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return histogram;
    });
}
console.log(123);
histogramFromStdin().then((histogram) => {
    console.log(histogram.toString());
});
