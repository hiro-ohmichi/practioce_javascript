export function withResource(resource, f) {
  try {
    // 関数.call(thisの値, ...関数の引数);
    f.call(resource, resource);
  } finally {
    resource.close();
  }
}

/*これのほうがシンプル
function withResource(resource, callback) {
  try {
    callback(resource);
  } finally {
    resource.close();
  }
}
*/
