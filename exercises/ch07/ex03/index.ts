// sum
export function sum(array: number[]) {
  return array.reduce((acc, currentVal) => acc + currentVal, 0);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function join(array: any[], delimiter: string) {
  const joinString = array.reduce(
    (acc: string, currentVal: number | string, index: number) => {
      if (index === 0) {
        return currentVal.toString();
      }
      return acc + delimiter + currentVal;
    },
    ""
  );
  return joinString;
}

// reverse
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reverse(array: any[]) {
  return array.reduce((acc, currentVal) => [currentVal, ...acc], []);
}

// every
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function every(array: any[], callback: (param: any) => boolean) {
  return array.reduce((acc, currentVal) => acc && callback(currentVal), true);
}

// some
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function some(array: any[], callback: (param: any) => boolean) {
  return array.reduce((acc, currentVal) => acc || callback(currentVal), false);
}
