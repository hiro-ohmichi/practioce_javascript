// ジェネレータは*をつける
export function* fibonacciGenerator() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

//const fibGenerator1 = fibonacciGenerator();
//console.log(fibGenerator1.next().value);
