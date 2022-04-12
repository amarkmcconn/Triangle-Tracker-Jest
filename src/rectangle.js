export function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype.checkType = function() {
    if ((this.width * 2) === (this.length * 2)) {
      return "this is a square";
    } else if ((this.width * 2) !== (this.length * 2)) {
      return "this is a rectangle";
    }
};