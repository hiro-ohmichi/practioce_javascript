export class C {
  #x = 42;
  y = 44;

  getX() {
    return this.#x;
  }
}

export class Cc {
  constructor() {
    let _x = 42;

    this.getX = () => _x;
  }

  public getX(): number {
    return this.getX();
  }
}
