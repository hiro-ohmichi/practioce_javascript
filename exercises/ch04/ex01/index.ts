export type ComplexType = {
  real: number;
  imag: number;
};

function showComplexNumber(complex: ComplexType) {
  const resultReal = complex.real;
  const resultImag = complex.imag;
  // console.log(resultReal, resultImag);

  if (resultReal === 0) {
    return resultImag + "i";
  } else if (resultImag === 0) {
    return "" + resultReal;
  } else if (Math.abs(resultImag) === 1) {
    const result =
      resultImag > 0 ? "" + resultReal + "+" + "i" : "" + resultReal + "-i";
    return result;
  } else {
    const result =
      resultImag > 0
        ? "" + resultReal + "+" + resultImag + "i"
        : "" + resultReal + resultImag + "i";
    return result;
  }
}

export function add(complex1: ComplexType, complex2: ComplexType) {
  const real = complex1.real + complex2.real;
  const imag = complex1.imag + complex2.imag;
  const resultCal: ComplexType = { real, imag };

  return showComplexNumber(resultCal);
}

export function sub(complex1: ComplexType, complex2: ComplexType) {
  const real = complex1.real - complex2.real;
  const imag = complex1.imag - complex2.imag;
  const resultCal: ComplexType = { real, imag };
  return showComplexNumber(resultCal);
}

export function mul(complex1: ComplexType, complex2: ComplexType) {
  const real = complex1.real * complex2.real - complex1.imag * complex2.imag;
  const imag = complex1.real * complex2.imag + complex1.imag * complex2.real;
  const resultCal: ComplexType = { real, imag };
  return showComplexNumber(resultCal);
}

export function div(complex1: ComplexType, complex2: ComplexType) {
  const denominator = complex2.real ** 2 + complex2.imag ** 2;
  const real =
    (complex1.real * complex2.real + complex1.imag * complex2.imag) /
    denominator;
  const imag =
    (complex1.imag * complex2.real - complex1.real * complex2.imag) /
    denominator;
  const resultCal: ComplexType = { real, imag };
  return showComplexNumber(resultCal);
}
