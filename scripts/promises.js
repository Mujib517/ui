//token
// trust
// async await

function addAsync(a, b) {
  a++;
  b++;
  console.log('execution started');
  var prms = new Promise(function (resolve, reject) {
    if (a > 0) {
      setTimeout(function () {
        var c = a + b;
        console.log('calc completed');
        reject("Failed to calculate");
      }, 2000);
    }
    else reject("Invalid data");

  });

  return prms;
}


// addAsync(20, 30)
//   .then(function (res) { console.log(res); }, function (err) { console.log(err); });

// addAsync(20,30)
// .then(function(){})
// .catch(function(){})