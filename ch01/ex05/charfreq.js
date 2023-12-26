var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var DefaultMapCustom = /** @class */ (function (_super) {
    __extends(DefaultMapCustom, _super);
    function DefaultMapCustom(defaultValue) {
        var _this = _super.call(this) || this;
        _this.defaultValue = defaultValue;
        return _this;
    }
    DefaultMapCustom.prototype.get = function (key) {
        if (this.has(key)) {
            return _super.prototype.get.call(this, key);
        }
        else {
            return this.defaultValue;
        }
    };
    return DefaultMapCustom;
}(Map));
var Histogram = /** @class */ (function () {
    function Histogram() {
        this.letterCounts = new DefaultMapCustom(0);
        this.totalLetters = 0;
    }
    Histogram.prototype.add = function (text) {
        text = text.replace(/\s/g, "").toUpperCase();
        for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
            var char = text_1[_i];
            var count = this.letterCounts.get(char);
            this.letterCounts.set(char, count + 1);
            this.totalLetters++;
        }
    };
    Histogram.prototype.toString = function () {
        //let entries = [...this.letterCounts];
        var entries = Array.from(this.letterCounts);
        entries.sort(function (a, b) {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            }
            else {
                return b[1] - a[1];
            }
        });
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            entry[1] = (entry[1] / this.totalLetters) * 100;
        }
        entries = entries.filter(function (entry) { return entry[1] >= 1; });
        var lines = entries.map(function (_a) {
            var l = _a[0], n = _a[1];
            return "".concat(l, ": ").concat("#".repeat(Math.round(n)), " ").concat(n.toFixed(2), "%");
        });
        return lines.join("\n");
    };
    return Histogram;
}());
function histogramFromStdin() {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var histogram, _d, _e, _f, chunk, e_1_1;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    process.stdin.setEncoding("utf-8");
                    histogram = new Histogram();
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 6, 7, 12]);
                    _d = true, _e = __asyncValues(process.stdin);
                    _g.label = 2;
                case 2: return [4 /*yield*/, _e.next()];
                case 3:
                    if (!(_f = _g.sent(), _a = _f.done, !_a)) return [3 /*break*/, 5];
                    _c = _f.value;
                    _d = false;
                    chunk = _c;
                    histogram.add(chunk);
                    _g.label = 4;
                case 4:
                    _d = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _g.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _g.trys.push([7, , 10, 11]);
                    if (!(!_d && !_a && (_b = _e.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _b.call(_e)];
                case 8:
                    _g.sent();
                    _g.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/, histogram];
            }
        });
    });
}
histogramFromStdin().then(function (histogram) {
    console.log(histogram.toString());
});
