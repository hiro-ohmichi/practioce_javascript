/* eslint-disable @typescript-eslint/no-explicit-any */
export function sequenceToObject(...values: any[]): { [key: string]: any } {
  const result: { [key: string]: any } = {};

  for (let i = 0; i < values.length; i += 2) {
    const key = values[i];
    const val = values[i + 1];
    if (typeof key === "string") {
      result[key] = val;
    } else {
      throw new Error();
    }
  }

  return result;
}
