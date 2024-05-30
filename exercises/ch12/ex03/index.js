export function* counter() {
  let count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      if (e === "reset") {
        count = 0;
      }
    }
  }
}
