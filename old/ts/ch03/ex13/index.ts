class Example {
  private value;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(value: any) {
    this.value = value;
  }

  valueOf(): number {
    return this.value;
  }

  toString(): string {
    return `${this.value}`;
  }
}

const obj = new Example("4");

// valueOf()
console.log(+obj);

// toString()
console.log(obj + "");
