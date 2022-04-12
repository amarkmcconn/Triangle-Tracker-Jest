export function Circle(radius){
  this.radius = radius;
}

Circle.prototype.sizeOf = function() {
  if (this.radius <= 5){
    return "small";
  }
} 