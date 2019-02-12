
function productOfArray(array) {

  function recursiveWalk(arr, res) {
    console.log(typeof arr)
    if (arr.length === 1) return res * arr[0];
    return res * recursiveWalk(arr.pop);
  }

  var result = recursiveWalk(array, 1)
  return result;
}

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60
