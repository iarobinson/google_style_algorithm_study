

function mergeSort(arr1, arr2) {
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

console.log(mergeSort([1, 10, 50], [10, 100]));
