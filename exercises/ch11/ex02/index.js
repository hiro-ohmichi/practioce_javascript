// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // この関数を実装する
  const cacheMap = new WeakMap();
  return function cachedFn(obj) {
    if (cacheMap.has(obj)) {
      return cacheMap.get(obj);
    }

    const result = f(obj);
    cacheMap.set(obj, result);
    return result;
  };
}

export async function slowFn(obj) {
  const n = 5;
  if (n <= 1) {
    return n;
  } else {
    return slowFn(n - 1) + slowFn(n - 2);
  }
}
