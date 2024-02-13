//import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
import { Point } from "./index.ts";

describe("add", () => {
  it("Can add the coordinates of an instance of the `Point` class to its own coordinates. ", () => {
    const point1 = new Point(12, 26);
    const point2 = new Point(8, 18);
    point1.add(point2);
    expect(point1.x).toBe(20);
    expect(point1.y).toBe(44);
  });
});
