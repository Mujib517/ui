//ES6
//this.


'use strict';

var mobile = {
  width: 5,
  height: 10,
  name: 'Mobile',

  displayMobile: function (param, param2) {
    console.log(this.name, param, param2); //Mobile
  }
};

var rect = {
  width: 100,
  height: 500,
  name: "Rectangle",
  displayRect: function () {
    console.log(this.name);
  }
}

var fun = mobile.displayMobile; //this:undefined
// fun.apply(rect, ['123', '456']); //this:rect. a:array
// fun.call(rect, '123', '456'); //this:rect. 

var newFun = mobile.displayMobile.bind(rect, '123', '456');
newFun.apply(mobile, [1, 2]);
newFun.apply({}, [1, 2]);
newFun.apply([], [1, 2]);