export function Rectangle(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Rectangle.prototype.checkType = function() {
    if ((this.side1 === this.side2) && (this.side2 === this.side3) && (this.side3 === this.side4) && (this.side4 === this.side1)) {
      return "this is a square";
    } else if ((this.side1 === this.side3) && (this.side2 === this.side4)) {
      return "this is a rectangle";
    }
};