function showAllKeys(anyObj: object) {
  for (const key in anyObj) {
    console.log(key);
  }
}

const aa = { あ: 1, i: 2, う: 33, e: 444 };
showAllKeys(aa);
