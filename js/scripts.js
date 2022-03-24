// BUSINESS LOGIC 

// UI LOGIC
$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#sideA").val());
    const number2 = parseInt($("#sideB").val());
    const number3 = parseInt($("#sideC").val());
    console.log(number1);

    if (number1 + number2 <= number3 || number2 + number3 <= number1) {
      return alert("This is not a triangle");
    } else if (number1 + number3 <= number2) {
      return alert("This is not a triangle");
    }
    if (number1 === number2 && number2 === number3) {
      return alert("it is an equilateral triangle!");
    } else if (number1 === number2 || number2 === number3) {
      return alert("This is an isosceles triangle")
    } else if (number1 === number3) {
      return alert("This is an isosceles triangle")
    } else if (number1 !== number2 && number2 !== number3) {
      return alert("this is a scalene triangle")
    } else if (number1 !== number3) {
      return alert("this is a scalene triangle")
    } else {
        return alert("please enter a number")
    }
  });
});