// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ObjInfo = {
  [key: string | number]: number;
};
export function removeAddPram(inputObj: ObjInfo): ObjInfo {
  const resultObj: ObjInfo = {};
  for (const property in inputObj) {
    if (inputObj[property] % 2 === 0) {
      resultObj[property] = inputObj[property];
    }
  }
  return resultObj;
}
