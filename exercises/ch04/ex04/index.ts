export function bitCount(a: number) {
  const binaryString = a.toString(2);
  const occurrences = (binaryString.match(new RegExp("1", "g")) || []).length;
  return occurrences;
}
