export function abs(x: number, y: number) {
  return Math.abs(x + y);
}

function sum(numbers: number[]) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

export function factorial(n: number) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function fib(n: number) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
