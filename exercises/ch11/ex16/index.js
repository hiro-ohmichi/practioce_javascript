export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let attempt = 0;
  function retry() {
    attempt++;
    const result = func();
    if (result) {
      callback(true);
    } else if (attempt < maxRetry) {
      setTimeout(retry, Math.pow(2, attempt - 1) * 1000);
    } else {
      callback(false);
    }
  }
  retry();
}
