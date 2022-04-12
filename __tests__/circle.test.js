import { Circle } from "../src/circle";

describe ('Circle', () => {

  test("should return circle object with radius", () => {
    const circle = new Circle(2);
    expect(circle.radius).toEqual(2);
  });
});