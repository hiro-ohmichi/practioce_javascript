obj = { x: 10 };

function foo() {
  with (obj) {
    y = 20;
    console.log(x + y);
  }
}

function test() {
  console.log(this);
}

foo();
test();

/*
30
not-strict.js:11 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/
