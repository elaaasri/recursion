// split original array into smaller ones :
function split(arr) {
  const start = 0;
  const end = arr.length;
  const mid = Math.floor(start + end) / 2;
  const left = arr.slice(start, mid);
  const right = arr.slice(mid, end);
  // base case :
  if (arr.length <= 1) return arr;
  // recursive case :
  return mergeSort(split(left), split(right)); // merge the left and right arrays :
}

// merge and sort left with right :
function mergeSort(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // compare first indexes of both arrays :
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  // add remaining nums from the left array :
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  // add remaining nums from the right array :
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}
console.log(split([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(split([105, 79, 100, 110]));
