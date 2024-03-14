export const obj = {
  r: 1, // 初期値
  theta: Math.PI, //初期値
  get x() {
    return this.r * Math.cos(this.theta);
  },
  set x(val: number) {
    if (Number.isNaN(val)) {
      throw new Error("Nanが設定されました");
    }
  },
  get y() {
    return this.r * Math.sin(this.theta);
  },
  set y(val: number) {
    if (Number.isNaN(val)) {
      throw new Error("Nanが設定されました");
    }
  },
};
