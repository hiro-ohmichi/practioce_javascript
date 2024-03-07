interface objectType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string | number | symbol]: any;
}

export function restrict(target: objectType, template: objectType) {
  const restrictObj: objectType = {};
  for (const key of Object.keys(template)) {
    if (key in template) {
      restrictObj[key] = target[key];
    }
  }
  return restrictObj;
}

export function substract(target: objectType, template: object) {
  const substractObj: objectType = {};
  for (const key of Object.keys(template)) {
    if (key in template) {
      continue;
    }
    substractObj[key] = target[key];
  }
  return substractObj;
}
