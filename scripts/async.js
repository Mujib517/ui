//asynchrnous -- synchronous
// Single thread (simple)
// Multiple thread (complex, synchronization, lock, dead locks, race condtions)
// web svc call,db call,i/o, timers, events
// asynchronous & non blocking
// single threaded

//bakery
function addAsync(a, b, cb) {
  a++;
  b++;
  console.log("Execution started");

  setTimeout(function () {
    var c = a + b;
    console.log("Calculation Completed");
    
  }, 2000);

  console.log("Execution stopped");
  return undefined;
}

// credentials 
// $100
// trust


var amount = 1000;

function cb(res) {
  amount -= 100;
  console.log(amount);
}

addAsync(10, 20, cb);




// function add(a, b) {
//   a++;
//   b++;
//   a += 2;
//   b += 3;

//   return a + b;
// }

