/* eslint-disable @typescript-eslint/no-explicit-any */
export function pop(arr: any[]) {
  return arr.slice(0, -1);
}

export function push(arr: any[], item: any) {
  return [...arr, item];
}

export function shift(arr: any[]) {
  return arr.slice(1);
}

export function unshift(arr: any[], item: any) {
  return [item, ...arr];
}

export function sort(arr: any[], callback?: (param1: any, param2: any) => any) {
  if (callback === undefined) {
    return arr.slice().sort();
  } else {
    return arr.slice().sort(callback);
  }
}

const seq = [1, 2, 3, 4, 5];

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
