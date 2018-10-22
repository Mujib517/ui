function addAsync(a, b) {

  var p = new Promise(function (resolve, reject) {
    if (a === 0) reject("Invalid operation");
    else {
      setTimeout(function () {
        var c = a + b;
        resolve(c);
      }, 2000);
    }
  });

  return p;
}

async function fun() {
  try {
    var res = await addAsync(10, 30);
    console.log(res);
  }
  catch (err) {
    console.log("Error: ", err);
  }
}

fun();

// babel: transpiler
// sync, async, callbacks, promises, async await
// this keyword, call, apply, bind
