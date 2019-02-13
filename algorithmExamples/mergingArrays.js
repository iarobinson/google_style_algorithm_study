

function merge(arr1, arr2) {
  var mergedResult = [];

  var i = 0;
  while (i < arr1.length) {

    var j = 0;
    while (j < arr2.length) {

      if (arr1[i] < arr2[j]) {
        mergedResult.push(arr1[i])
        i += 1;
      } else {
        mergedResult.push(arr2[j])
        j += 1;
  }}}

  return mergedResult;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log(merge(left, right));
  // return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
