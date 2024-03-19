export function reverseStr(str: string) {
  const reverseArray = Array.from(str).reverse();
  return reverseArray.join("");
}

export function reverse(str: string) {
  //const str = "吾輩は猫である。名前はたぬき。";
  const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

  const segments = segmenterJa.segment(str);
  const segmentsArray = Array.from(segments);

  return segmentsArray.reduceRight(
    (result, currentVal) =>
      (result += currentVal.isWordLike
        ? reverseStr(currentVal.segment)
        : currentVal.segment),
    ""
  );
}
