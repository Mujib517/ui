//dictionary key:value
//prime or not
// pure functions: same input same output
// O(N). 
// prime: two factors, 1 and itself  3   1,3
// 17: 1      17
// 15: 1 3 5 15
// 20: 1 2 4 5 10 20 sqrt(N)
// 100: 1 2 4 5 10 20 25 50 100
// 100000 => 1000
// O(N) ==> O(sqrt(N))

 //var cache = {};
//   function isPrime(n) {
//   if (cache[n] === true || cache[n] === false) return cache[n]; //O(1)
//   console.log("Calculating...");
//   if (n === 1) return false;
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {
//       cache[n] = false;
//       return false;
//     }
//   }
//   cache[n] = true;
//   return true;
// }
// console.log(isPrime(100));
// console.log(isPrime(100));
// console.log(isPrime(17));
// console.log(isPrime(17));
// console.log(isPrime(17));

