import { Circle } from "../src/circle";

describe ('Circle', () => {

  test("should return circle object with radius", () => {
    const circle = new Circle(2);
    expect(circle.radius).toEqual(2);
  });

  test("if radius input is less than 5 it should return circle object with a size of small", () => {
    const smallCircle = new Circle(2);
    expect(smallCircle.sizeOf()).toEqual("small");
  });
  
  test("if radius input is greater than 5 but less than or equal to 10 it should return circle object with a size of medium", () => {
    const mediumCircle = new Circle(6);
    expect(mediumCircle.sizeOf()).toEqual("medium");
  });
});