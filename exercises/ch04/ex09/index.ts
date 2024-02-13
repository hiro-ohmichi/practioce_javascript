//予想、`undefined`→undefined, `null`→null, `オブジェクト`→object, `NaN`→number, `数値`→number, `関数`→function
const un = undefined;
console.log(typeof un); //undefined

const nu = null;
console.log(typeof nu); //object 注意

const obj = { nn: 1, kk: 2 };
console.log(typeof obj); //object
const array = [1, 2, 3];
console.log(typeof array); //object

const nn = NaN;
console.log(typeof nn); //number

const num = 1;
console.log(typeof num); //number

const fn = () => {
  console.log(123);
};
console.log(typeof fn); //function
