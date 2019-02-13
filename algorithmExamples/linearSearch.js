function linearSearch(arr, target) {
  for (var i = 0; i < arr.length; i += 1) {
    if (target === arr[i]) return i;
  }
  return -1;
}

console.log(linearSearch([0,1,2], 10));
console.log(linearSearch([0,1,2], 2));
