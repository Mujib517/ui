//token
// trust

function addAsync(a, b) {
  a++;
  b++;
  console.log('execution started');
  return new Promise(function (resolve, reject) {
    if (a > 0) {
      setTimeout(function () {
        var c = a + b;
        console.log('calc completed');
        resolve(c);
      }, 2000);
    }
    else reject("Invalid data");

  });
}

var prms = addAsync(10, 20)
  .then(function () {
    console.log("Successs");
  });

addAsync(-10, 100).then().catch(function (err) {
  console.log(err);
})



