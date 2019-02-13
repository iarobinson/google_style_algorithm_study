// // My initial solution
// function maxSubarraySum(arr, n) {
//   if (arr.length <= 0) return null;
//   let subarrayLog = [];
//
//   for (var i = 0; i <= arr.length - n; i += 1) {
//     let arrayToSum = arr.slice(i, i + n);
//     subarrayLog[i] = arrayToSum.reduce(getSum);
//   }
//
//   return Math.max(...subarrayLog);
// }

// // Use this for both
// function getSum(total, num) {
//   return total + num;
// }
//
// function maxSubarraySum(arr, n) {
//   let max = -Infinity;
//   if (arr.length <= 0) return null;
//
//   for (var i = 0; i <= arr.length - n; i += 1) {
//     let temp = 0;
//     let arrayToSum = arr.slice(i, i + n);
//     temp = arrayToSum.reduce(getSum);
//     if (temp > max) max = temp;
//   }
//
//   return max;
// }

// Teach solution
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length <= 0) return null;

  for (var i = 0; i < num; i += 1) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i += 1) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}


console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)); // 19
console.log(maxSubarraySum([], 4)); // 17
