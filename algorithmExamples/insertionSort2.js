function insertionSort(list) {
  for (var i = 1; i < list.length; i += 1) {
    var currentListItem = list[i];

    for (var j = i - 1; j >= 0 && list[j] > currentListItem; j -= 1) {
      list[j + 1] = list[j];
    }
    list[j + 1] = currentListItem;
  }

  return list;
}

console.log(insertionSort([ 8, 39, 19, 45, 13, 75, 58, 72, 61, 65 ]));
