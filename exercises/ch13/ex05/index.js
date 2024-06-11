function wait(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

function g1() {
  return wait(1000)
    .then(() => {
      console.log("A");
      wait(2000);
    })
    .then(() => {
      console.log("A");
      wait(3000);
    })
    .then(() => {
      console.log("C");
    });
}

async function g2() {
  try {
    await wait(1000);
    console.log("A");
    await wait(2000);
    console.log("B");
    await wait(3000);
    console.log("C");
  } catch (error) {
    console.error(error);
  }
}

function g3() {
  // 以下2つの関数が存在するとします (中身は適当)
  function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
  }
  function fetchUserFriends(user) {
    return Promise.resolve([
      { name: "Sam", id: 100 },
      { name: "Bob", id: 1 },
    ]);
  }
  // 入れ子にする
  return fetchUser().then((user) => {
    return fetchUserFriends(user).then((friends) => {
      console.log(`${user.name} has ${friends.length} friends!`);
    });
  });
}

function g4() {
  function someFunction() {
    return 42;
  }
  return Promise.resolve(someFunction());
}
