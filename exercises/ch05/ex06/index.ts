function testTryCatchFinally() {
  try {
    console.log(1);
    throw new Error("error");
  } catch (error) {
    console.log(2);
    return "catch";
  } finally {
    console.log(3);
    // eslint-disable-next-line no-unsafe-finally
    return "finally";
  }
}

const result = testTryCatchFinally();
console.log("Result:", result);

/*
1
2
3
Result: finally

// finallyのreturnが優先されるので注意
*/
