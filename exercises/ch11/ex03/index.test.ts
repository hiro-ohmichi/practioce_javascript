import { bigToLittleEndian, littleToBigEndian } from "./index.ts";

describe("テスト", () => {
  test("test", () => {
    // リトルエンディアンのUint32Arrayを用意
    const littleEndianData = new Uint32Array([0x01020304, 0x05060708]);
    // [ 16909060, 84281096 ]
    // ビッグエンディアンのUint32Arrayを用意
    const bigEndianData = new Uint32Array([0x04030201, 0x08070605]);
    //  [ 67305985, 134678021 ]
    expect(littleToBigEndian(littleEndianData)).toEqual(
      new Uint32Array([0x04030201, 0x08070605])
    );
    expect(bigToLittleEndian(bigEndianData)).toEqual(
      new Uint32Array([0x01020304, 0x05060708])
    );
  });
});
