const obj = { x: 10 };

function foo() {
  obj.y = 20;
  console.log(obj.x + obj.y);
}

function test() {
  console.log(globalThis);
}

foo();
test();
