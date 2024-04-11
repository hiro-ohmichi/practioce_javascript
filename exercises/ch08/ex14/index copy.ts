/* eslint-disable @typescript-eslint/no-explicit-any */
export function any(...fns: ((a: number) => boolean)[]) {
  return function (arg: number): boolean {
    return fns.some((fn) => fn(arg));
  };
}

export function catching(
  fn: (...a: any[]) => any,
  errorHandler: (a: any) => any
) {
  return function (...args: any[]) {
    try {
      return fn(...args);
    } catch (error) {
      return errorHandler(error);
    }
  };
}
