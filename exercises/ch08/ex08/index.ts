export function counterGroup() {
  let totalcounter = 0;
  function newCounter() {
    let n = 0;
    return {
      count: () => {
        totalcounter++;
        return n++;
      },
      reset: () => {
        n = 0;
      },
    };
  }
  function total() {
    return totalcounter;
  }
  return {
    newCounter,
    total,
  };
}
