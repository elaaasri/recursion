// solution 1 : (using iteration)
function fib(n) {
  let result = [0, 1];
  // storing first and second value :
  let a = result[0];
  let b = result[1];
  let sum;
  for (let i = 2; i < n; i++) {
    // storing sum of two previous values :
    sum = a + b;
    // redeclaring first value as the second value :
    a = b;
    // redeclaring second value as the sum of them :
    b = sum;
    // pushing sum to result :
    result.push(sum);
  }
  return result;
}
console.log(fib(8));
