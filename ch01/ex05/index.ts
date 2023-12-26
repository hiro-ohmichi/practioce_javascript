export function abs(x: number) {
  return Math.abs(x);
}

export function sum(numbers: number[]) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

export function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function fib(n: number, memo: number[] = []): number {
  if (n <= 1) {
    return n;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(otherPoint: Point) {
    this.x += otherPoint.x;
    this.y += otherPoint.y;
  }
}
