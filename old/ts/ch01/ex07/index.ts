export class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(otherPoint: Point) {
    this.x += otherPoint.x;
    this.y += otherPoint.y;
  }
}
