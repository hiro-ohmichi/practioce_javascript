class OVER_SIZEError extends Error {
  constructor(size) {
    super(`{size}`);
    this.size = size;
  }
  get name() {
    return `over size ${this.size}`;
  }
}
