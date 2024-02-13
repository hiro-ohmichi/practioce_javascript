const myObject = {
  forms: [
    {
      address: {
        value: "123",
      },
      name: {
        value: "456",
      },
      email: {
        value: "789",
      },
    },
    {
      address: {
        value: "1232",
      },
      name: {
        value: "4562",
      },
      email: {
        value: "7892",
      },
    },
  ],
};

function loadObjUseWith() {
  // eslint-disable-next-line no-with
  with (myObject.forms[0]) {
    const aa = address.value;
    const bb = name.value;
    const cc = email.value;
    console.log(aa, bb, cc);
  }
}

function loadObjNormal() {
  // eslint-disable-next-line no-with
  const temp = myObject.forms[0];
  const aa = temp.address.value;
  const bb = temp.name.value;
  const cc = temp.email.value;
  console.log(aa, bb, cc);
}

let startTime = performance.now(); // 開始時間
loadObjUseWith(); // 計測する処理
let endTime = performance.now(); // 終了時間
console.log(`withを使った処理時間${endTime - startTime}`);

startTime = performance.now(); // 開始時間
loadObjNormal(); // 計測する処理
endTime = performance.now(); // 終了時間
console.log(`普通のものの処理時間${endTime - startTime}`);
