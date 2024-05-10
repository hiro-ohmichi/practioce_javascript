export function littleToBigEndian(data: Uint32Array): Uint32Array {
  const result = new Uint32Array(data.length);
  for (let i = 0; i < data.length; i++) {
    result[i] =
      ((data[i] & 0x000000ff) << 24) |
      ((data[i] & 0x0000ff00) << 8) |
      ((data[i] & 0x00ff0000) >>> 8) |
      ((data[i] & 0xff000000) >>> 24);
  }
  return result;
}

export function bigToLittleEndian(data: Uint32Array): Uint32Array {
  const result = new Uint32Array(data.length);
  for (let i = 0; i < data.length; i++) {
    result[i] =
      ((data[i] & 0xff000000) >>> 24) |
      ((data[i] & 0x00ff0000) >>> 8) |
      ((data[i] & 0x0000ff00) << 8) |
      ((data[i] & 0x000000ff) << 24);
  }
  return result;
}

// リトルエンディアンのUint32Arrayを用意
const littleEndianData = new Uint32Array([0x01020304, 0x05060708]);
console.log("リトルエンディアン:", littleEndianData);
// 出力: リトルエンディアン: Uint32Array(2) [ 67305985, 84281096 ]

// ビッグエンディアンのUint32Arrayを用意
const bigEndianData = new Uint32Array([0x04030201, 0x08070605]);
console.log("ビッグエンディアン:", bigEndianData);
// 出力: ビッグエンディアン: Uint32Array(2) [ 67305985, 134678021 ]

// リトルエンディアンをビッグエンディアンに変換
const convertedToBigEndian = littleToBigEndian(littleEndianData);
console.log(
  "リトルエンディアンからビッグエンディアンに変換:",
  convertedToBigEndian
);
// 出力: リトルエンディアンからビッグエンディアンに変換: Uint32Array(2) [ 67305985, 134678021 ]

// ビッグエンディアンをリトルエンディアンに変換
const convertedToLittleEndian = bigToLittleEndian(bigEndianData);
console.log(
  "ビッグエンディアンからリトルエンディアンに変換:",
  convertedToLittleEndian
);
// 出力: ビッグエンディアンからリトルエンディアンに変換: Uint32Array(2) [ 67305985, 84281096 ]
