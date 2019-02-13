
function bubbleSort(list) {
  var goAgain = true;

  while (goAgain === true) {
    goAgain = false;
    for (var i = 0; i < list.length - 1; i += 1) {
      if (list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        console.log(list, list[i], list[i + 1]);
        goAgain = true;
      }
    }
  }

  return list;
}

console.log(bubbleSort([14, 199, 20, 1, 44]));
