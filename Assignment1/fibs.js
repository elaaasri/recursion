// solution 1 : (using iteration)
function fib(n) {
  let result = [0, 1];
  let a = result[0];
  let b = result[1];
  let sum;
  for (let i = 2; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
    result.push(sum);
  }
  return result;
}
console.log(fib(8));
