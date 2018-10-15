// constructor function
// Pascal casing
function Mobile(color) {
  this.width = 5;
  this.height = 10;
  this.color = color;

  this.call = function (number) {
    console.log("Calling", number);
  }
}

var m1 = new Mobile("Red");
var m2 = new Mobile("Black");
var m3 = new Mobile("Blue");

