function pivot(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIndex = start;

  for (var i = start + 1; i < arr.length; i += 1) {
    if (pivot > arr[i]) {
      swapIndex += 1;
      swap(arr, swapIndex, i)
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    // Left
    quickSort(arr, left, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 4, 8, 2, 1, 5, 7, 6, 3]))
