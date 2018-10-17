//IIFE: Immediately invoked function express
//Revealing Module design pattern
// ES5: variables function scoped not block scoped
// Caching
function Module() {
  var x = 100;

  var method1 = function () {
    x++;
    console.log("method1");
  }

  var method2 = function () {
    console.log("method2");
  }

  var method3 = function () {
    console.log("method3");
  }

  return {
    method1: method1,
    method2: method2
  }
};


var myModule = Module();

myModule.one();
myModule.two();
myModule.method3();


// (function () {
//   var xyz = 100;
//   console.log(xyz);
// })();
// Hoisting

// function test() {
//   if (true) {
//     var x = 100;
//   }
//   console.log(x);
// }

// test();