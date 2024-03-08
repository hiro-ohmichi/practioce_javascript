interface objectType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string | number | symbol]: any;
}

export function substract(target: objectType, ...template: object[]) {
  for (const key in template) {
    delete target[key];
  }
  return target;
}

export function restrict(target: objectType, ...template: object[]) {
  for (const key in target) {
    if (!(key in template)) {
      delete target[key];
    }
  }
  return target;
}
