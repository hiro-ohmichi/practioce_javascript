// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getAllPropertyNames(obj: any): string[] {
  let propertyNames: string[] = [];
  // Reflect.ownKeysでまとめてできそうだがわけておく
  propertyNames = propertyNames.concat(Object.getOwnPropertyNames(obj));
  propertyNames = propertyNames.concat(
    Object.getOwnPropertyNames(Object.getOwnPropertySymbols(obj))
  );

  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    const nowProps = Object.keys(proto);
    propertyNames = propertyNames.concat(nowProps);
    proto = Object.getPrototypeOf(proto);
  }

  return propertyNames;
}
