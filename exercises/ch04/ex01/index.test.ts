import { ComplexType, add, div, mul, sub } from "./index.ts";
describe("function add", () => {
  test("only real number", () => {
    const complexNumber1: ComplexType = { real: 1, imag: 0 };
    const complexNumber2: ComplexType = { real: 10, imag: 0 };
    expect(add(complexNumber1, complexNumber2)).toBe("11");
  });
  test("only real imag", () => {
    const complexNumber1: ComplexType = { real: 0, imag: 1 };
    const complexNumber2: ComplexType = { real: 0, imag: 10 };
    expect(add(complexNumber1, complexNumber2)).toBe("11i");
  });
  test("plus number", () => {
    const complexNumber1: ComplexType = { real: 1, imag: 4 };
    const complexNumber2: ComplexType = { real: 10, imag: 5 };
    expect(add(complexNumber1, complexNumber2)).toBe("11+9i");
  });
  test("minus number", () => {
    const complexNumber1: ComplexType = { real: -1, imag: -4 };
    const complexNumber2: ComplexType = { real: -10, imag: -5 };
    expect(add(complexNumber1, complexNumber2)).toBe("-11-9i");
  });
});

describe("function sub", () => {
  test("only real number", () => {
    const complexNumber1: ComplexType = { real: 10, imag: 0 };
    const complexNumber2: ComplexType = { real: 1, imag: 0 };
    expect(sub(complexNumber1, complexNumber2)).toBe("9");
  });
  test("only real imag", () => {
    const complexNumber1: ComplexType = { real: 0, imag: 10 };
    const complexNumber2: ComplexType = { real: 0, imag: 1 };
    expect(sub(complexNumber1, complexNumber2)).toBe("9i");
  });
  test("plus number and show -i", () => {
    const complexNumber1: ComplexType = { real: 1, imag: 4 };
    const complexNumber2: ComplexType = { real: 10, imag: 5 };
    expect(sub(complexNumber1, complexNumber2)).toBe("-9-i");
  });
  test("minus number and show +i ", () => {
    const complexNumber1: ComplexType = { real: -1, imag: -4 };
    const complexNumber2: ComplexType = { real: -10, imag: -5 };
    expect(sub(complexNumber1, complexNumber2)).toBe("9+i");
  });
});

describe("function mul", () => {
  test("test mul", () => {
    const complexNumber1: ComplexType = { real: 1, imag: -4 };
    const complexNumber2: ComplexType = { real: -10, imag: 5 };
    expect(mul(complexNumber1, complexNumber2)).toBe("10+45i");
  });
});

describe("function div", () => {
  test("test div", () => {
    const complexNumber1: ComplexType = { real: 1, imag: -4 };
    const complexNumber2: ComplexType = { real: -10, imag: 5 };
    expect(div(complexNumber1, complexNumber2)).toBe("-0.24+0.28i");
  });
});
