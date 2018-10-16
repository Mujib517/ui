// constructor function
// Pascal casing
// literals, constructor, create, class
function Mobile(color) {
  this.width = 5;
  this.height = 10;
  this.color = color;
  // this.pi=3.14;
}

Mobile.prototype.PI = 3.14;

Mobile.prototype.call = function (number) {
  console.log(number);
}

var m1 = new Mobile("Red");  //12
var m2 = new Mobile("Black");
var m3 = new Mobile("Blue");


console.log(m1.width);
console.log(m2.width);

