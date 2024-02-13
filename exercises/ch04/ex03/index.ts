//全減算器 参考：https://engineer-education.com/adder-subtractor/
export function sub(a: number, b: number) {
  while (b !== 0) {
    const borrow = ~a & b; //D
    a = a ^ b; //S
    b = borrow << 1;
  }
  return a;
}

/**
 * old
 * 
 * function add(a: number, b: number) {
  while (b !== 0) {
    //桁上げの場所を探す 1010, 1100なら1000
    const carry = a & b; //C
    //桁上げを考慮せず加算する 1010 1100 0110
    a = a ^ b; //S
    //桁上げした箇所を左にシフトする
    b = carry << 1; // ex) C0→C1  C1→C2 ... 
  }
  return a;
}

export function sub(a: number, b: number) {
  return add(a, add(~b, 1));
}
 * 
 */
