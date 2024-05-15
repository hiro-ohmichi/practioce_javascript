export function modifyUrl({ base, addQuery, path }) {
  const url = new URL(base);
  if (path !== undefined) {
    url.pathname = path;
  }
  if (addQuery !== undefined) {
    for (const [key, value] of addQuery) {
      url.searchParams.set(key, value);
    }
  }

  return url.href;
}
