import { Circle } from "../src/circle";

describe ('Circle', () => {

  test("should return circle object with radius", () => {
    const circle = new Circle(2);
    expect(circle.radius).toEqual(2);
  });

  test("if radius input is less than 5 it should return circle object with a size of small", () => {
    const circle = new Circle(2);
    expect(circle.sizeOf()).toEqual("small");
  });
});