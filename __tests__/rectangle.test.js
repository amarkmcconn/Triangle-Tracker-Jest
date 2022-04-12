import { Rectangle } from './../src/rectangle.js';

describe('Rectangle', () => {

  test("should correctly create a rectangle object with unique width and length", () => {
    const rectangle = new Rectangle(4,5);
    expect(rectangle.checkType()).toEqual("this is a rectangle");
  });

  test('should measure the length of the rectanlge object for equality, returning square if they are all equal', () => {
    const square = new Rectangle(5,5);
    expect(square.checkType()).toEqual("this is a square");
  });
});