export function substring(str, indexStart, indexEnd) {
  if (indexEnd === undefined) {
    indexEnd = str.length;
  }
  if (indexEnd < 0 || isNaN(indexEnd)) {
    indexEnd = 0;
  }
  if (indexStart < 0 || isNaN(indexStart)) {
    indexStart = 0;
  }

  const strIndex = [...str];

  const newStrIndex =
    indexStart < indexEnd
      ? strIndex.slice(indexStart, indexEnd)
      : strIndex.slice(indexEnd, indexStart);
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
  if (str.length >= targetLength) {
    return str;
  }
  // padStringがfalseなら" "が設定される
  padString = padString || " ";
  return (
    padString
      .repeat(Math.ceil((targetLength - str.length) / padString.length))
      .slice(0, targetLength - str.length) + str
  );
}

export function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
