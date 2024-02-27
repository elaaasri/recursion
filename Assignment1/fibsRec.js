// solution 2 : (recursively)
// recursive func :
function fibRec(n) {
  // base case :
  if (n == 0 || n == 1) return n;
  // recursive case :
  else return fibRec(n - 1) + fibRec(n - 2);
}
// getting fib for each index and storing it :
function fibSequence(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(fibRec(i));
  }
  return result;
}
console.log(fibSequence(8));

// // another solution :
// function fibSequence(n) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     // get the sum of two previous values for each index :
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr;
// }
// console.log(fibSequence(8));
