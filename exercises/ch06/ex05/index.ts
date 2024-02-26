type ObjInfo = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string | number]: any;
};
const protoObject: ObjInfo = {
  a: 1,
  2: 2,
  i: 3,
  100: 4,
  u: 5,
  e: 999,
  o: 1000,
};

const obj = Object.create(protoObject);

//add property
obj[33] = 123;
// over write property
obj[2] = 222;

Object.defineProperty(protoObject, "o", {
  value: 4200,
  writable: false,
  configurable: false,
  enumerable: false,
});
