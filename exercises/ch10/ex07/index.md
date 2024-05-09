date-fnsは機能別に細かくモジュールを分割している。具体的には、関数や型定義ごとにファイルが整理されています。たとえば、日付のパースやフォーマット、日付の計算などの機能ごとにファイルが分かれている。
この構成になっているので呼び出す場合は
```
import { format } from "date-fns";
const date = format(new Date(), "yyyy年MM月dd日");
```

Luxon は、src/luxon.js がメインのエントリーポイントとなり、その他の機能は、datetime、duration、interval などの日付や期間の操作に関するモジュールと、formatting、parsing、zones などの機能別のディレクトリに分割されています。このようにLuxonは、日付操作の中核となる機能とその他の機能を分けて管理しており、柔軟性と拡張性が高いアーキテクチャとなっている。
この構成になっているので呼び出す場合は
```
import { DateTime } from "luxon";
const date = DateTime.now().toLocaleString(DateTime.DATE_FULL);
```

Day.js は、date-fnsと似ているが、日付操作の主要な機能でモジュール化している
```
import dayjs from "dayjs";
const date = dayjs().format("YYYY年MM月DD日");
```