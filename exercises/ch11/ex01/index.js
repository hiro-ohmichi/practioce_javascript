export class TypeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    if (!(value instanceof key)) {
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
