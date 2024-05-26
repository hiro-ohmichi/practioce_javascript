export class TypeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    if (!(Object.getPrototypeOf(value) != key.prototype)) {
      throw new Error(`Value ${value} is not an instance of ${key.name}`);
    }
    this.map.set(key, value);
    return this;
  }

  get(key) {
    const value = this.map.get(key);
    if (!value) {
      throw new Error(`No value found for key ${key.name}`);
    }
    return value;
  }
}
