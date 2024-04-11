export function any(...fns) {
  return function (arg) {
    return fns.some((fn) => fn(arg));
  };
}

export function catching(fn, errorHandler) {
  return function (...args) {
    try {
      return fn(...args);
    } catch (error) {
      return errorHandler(error);
    }
  };
}
