import { Rectangle } from './../src/rectangle.js';

describe('Rectangle', () => {

  test('should correctly create a rectangle object with four lengths', () => {
    const rectangle = new Rectangle(4,5,4,5);
    expect(rectangle.side1).toEqual(4);
    expect(rectangle.side2).toEqual(5);
    expect(rectangle.side3).toEqual(4);
    expect(rectangle.side4).toEqual(5);
  });

  test('should measure the length of the rectanlge object for equality, returning square if they are all equal', () => {
    const square = new Rectangle(5,5,5,5);
    expect(square.checkType()).toEqual("this is a square");
  });
});