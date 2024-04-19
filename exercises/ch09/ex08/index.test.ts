import { AlarmClock, State, Action } from "./index.ts";
// 状態遷移テーブルを作成してそれを基に動かすクラスを作る
export type EventName =
  | "setAlarm" // 通常
  | "cancelAlarm" // アラームセット中
  | "reachedToAlarmTime" // アラーム鳴動中
  | "snooze" // スヌーズ中
  | "elapseSnoozeTime";

// 状態遷移テーブル
const transitionTable: Record<
  State,
  Record<EventName, { nextState: State; action: Action }>
> = {
  normal: {
    setAlarm: { nextState: "alarmSet", action: "none" },
    cancelAlarm: { nextState: "normal", action: "none" },
    reachedToAlarmTime: { nextState: "normal", action: "none" },
    snooze: { nextState: "normal", action: "none" },
    elapseSnoozeTime: {
      nextState: "normal",
      action: "none",
    },
  },
  alarmSet: {
    setAlarm: { nextState: "alarmSet", action: "none" },
    cancelAlarm: { nextState: "normal", action: "none" },
    reachedToAlarmTime: { nextState: "alarmSounding", action: "soundAlarm" },
    snooze: { nextState: "alarmSet", action: "none" },
    elapseSnoozeTime: {
      nextState: "alarmSet",
      action: "none",
    },
  },
  alarmSounding: {
    setAlarm: { nextState: "alarmSounding", action: "soundAlarm" },
    cancelAlarm: { nextState: "normal", action: "stopAlarm" },
    reachedToAlarmTime: { nextState: "alarmSounding", action: "soundAlarm" },
    snooze: { nextState: "snoozing", action: "stopAlarm" },
    elapseSnoozeTime: { nextState: "alarmSounding", action: "soundAlarm" },
  },
  snoozing: {
    setAlarm: { nextState: "snoozing", action: "none" },
    cancelAlarm: { nextState: "normal", action: "none" },
    reachedToAlarmTime: { nextState: "snoozing", action: "none" },
    snooze: { nextState: "snoozing", action: "none" },
    elapseSnoozeTime: {
      nextState: "alarmSounding",
      action: "soundAlarm",
    },
  },
};

function changeState(alarmClock: AlarmClock, state: State) {
  switch (state) {
    case "alarmSet":
      alarmClock.setAlarm();
      break;
    case "alarmSounding":
      alarmClock.setAlarm();
      alarmClock.reachedToAlarmTime();
      break;
    case "normal":
      break;
    case "snoozing":
      alarmClock.setAlarm();
      alarmClock.reachedToAlarmTime();
      alarmClock.snooze();
      break;
    default:
      break;
  }
}

describe("test object2", () => {
  for (const [key, value] of Object.entries(transitionTable)) {
    for (const [subKey, subValue] of Object.entries(value)) {
      test(`状態${key}のとき${subKey}を実行した時のテスト`, () => {
        const alarmClock = new AlarmClock();
        changeState(alarmClock, key as State);
        const actionResult = alarmClock[subKey as EventName]();
        expect(actionResult).toBe(subValue.action);
        expect(alarmClock.getState()).toBe(subValue.nextState);
      });
    }
  }
});

// ステータスがnormalに戻っているのが謎
