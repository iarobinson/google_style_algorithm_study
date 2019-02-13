
function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i += 1) {
    let swappableIndex
    var minimumValue = Infinity;
    for (var j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < minimumValue) {
        minimumValue = arr[j];
        swappableIndex = j;
      }
    }
    swap(arr, i, swappableIndex);
  }
  return arr;
}

function swap(list, idx1, idx2) {
  console.log(idx1, idx2)
  var temp = list[idx1];
  list[idx1] = list[idx2];
  list[idx2] = temp;
}

console.log(selectionSort([ 14, 20, 199, 1, 44 ]));
// O(n2) - Not terribly efficient
