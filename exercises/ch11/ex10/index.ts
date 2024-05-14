export function getDaysInMonth(year: number, month: number) {
  // 謎：2月を知りたかったらmonth=3にしないとダメだと思ったが、そうではなかった
  return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(2000, 2));

export function countsWeekdays(firstDate: string, lastDate: string) {
  let count = 0;
  for (
    let currentDate = new Date(firstDate);
    currentDate <= new Date(lastDate);
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      count++;
    }
  }
  return count;
}

export function getWeekday(dateString: string, locale: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
}
console.log(getWeekday("2023-12-12", "ja-JP"));
