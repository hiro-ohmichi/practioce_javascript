export function substring(str, indexStart, indexEnd) {
  const strIndex = [...str];
  const newStrIndex = strIndex.slice(indexStart, indexEnd);
  const newString = newStrIndex.join("");
  return newString;
}

export function slice(str, indexStart, indexEnd) {
  const strIndex = [...str];
  const newStrIndex = strIndex.slice(indexStart, indexEnd);
  const newString = newStrIndex.join("");
  return newString;
}

export function padStart(str, targetLength, padString) {
  const strIndex = [...str];

  while (strIndex < targetLength) {
    strIndex.unshift(padString);
  }
  const newString = strIndex.join("");
  return newString;
}

export function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
