
// // Naive Solution
// function countUniqueValues(arr){
//   // add whatever parameters you deem necessary - good luck!
//
//   var uniqueVales = 0;
//   var uniqueLog = [];
//
//   for (var i = 0; i  < arr.length; i += 1) {
//       if (uniqueLog.indexOf(arr[i]) === -1) {
//           uniqueLog.push(arr[i]);
//       }
//   }
//
//   return uniqueLog.length
// }

function countUniques(arr) {
  if (arr.length <= 0) return [0]
  var i = 0;
  for (var j = 1; j < arr.length; j += 1) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }

  return [(i + 1)];
}

console.log(countUniques([1, 1, 1, 1, 1, 2])); // [2]
console.log(countUniques([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // [7]
console.log(countUniques([])); // [0]
// console.log(countUniques([-2, -1, -1, -1, 0, 1])); // [4]
