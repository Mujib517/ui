//asynchrnous -- synchronous
// Single thread (simple)
// Multiple thread (complex, synchronization, lock, dead locks, race condtions)
// web svc call,db call,i/o, timers, events
function add(a, b) {
  a++;
  b++;
  a += 2;
  b += 3;

  console.log(a + b);
}

add(10, 20);