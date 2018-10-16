//'use strict';

//sloppy, strict

var mobile = {
  call: function () {
    console.log("calling...");
  }
};


var m1 = Object.create(mobile, {
  width: { value: 5, enumerable: true, writable: false, configurable: false },
  height: { value: 10, enumerable: true },
  color: { value: 'red', enumerable: true }
});

//m1.width = 10;

x = 100;

console.log(m1);
// m1.toString2();
// m1.prop="kfdajfkd";

// Object.defineProperty(m1, "width", {
//   writable: false,
//   value:10,
//   enumerable:true
// });

function newFun() {
  'use strict';
  y = 10;
}

newFun();