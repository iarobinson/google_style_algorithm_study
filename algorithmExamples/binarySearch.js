// Binary Search only works on sorted arrays
// Divide and Conquer is how we can solve this.

function binarySearch(sortedArray, target) {
  var counter = 0;
  var leftPointer = 0;
  var rightPointer = sortedArray.length - 1;
  var centerPointer = Math.floor(((rightPointer - leftPointer) / 2));

  while (leftPointer < rightPointer && counter < sortedArray.length) {

    if (sortedArray[leftPointer] === target) return leftPointer;
    if (sortedArray[rightPointer] === target) return rightPointer;
    if (sortedArray[centerPointer] === target) {
      return centerPointer;
    } else if (target > sortedArray[centerPointer]) {
      leftPointer = centerPointer;
      centerPointer = leftPointer + Math.floor(((rightPointer - leftPointer) / 2));
    } else if (target < sortedArray[centerPointer]) {
      rightPointer = centerPointer;
      centerPointer = Math.floor(((rightPointer - leftPointer) / 2));
    }
    counter += 1;
  }
  return -1;
}

console.log(binarySearch([ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ], 3)); // 1
console.log(binarySearch([ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ], 19)); // 12
console.log(binarySearch([ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ], 1)); // 0
console.log(binarySearch([ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ], 11)); // 7
