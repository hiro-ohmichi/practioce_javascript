const DAYS = ["月", "火", "水", "木", "金", "土", "日"] as const;

export function isWeeklyHolidayIfElse(day: string): boolean {
  const inputDay = DAYS.find((availableDay) => availableDay === day);

  if (inputDay === undefined) {
    console.log("曜日でない文字列が入力されています");
    return false;
  }

  if (inputDay === "土" || inputDay === "日") {
    return true;
  } else {
    return false;
  }
}

export function isWeeklyHolidaySwitch(day: string): boolean {
  const inputDay = DAYS.find((availableDay) => availableDay === day);
  switch (inputDay) {
    case undefined:
      console.log("曜日でない文字列が入力されています");
      return false;
    case "土":
    case "日":
      return true;
    default:
      return false;
  }
}
