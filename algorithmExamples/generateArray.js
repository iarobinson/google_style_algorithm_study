function generateLargeArray(numberOfRandomElements) {
  var largeArray = [];

  var index = 0;
  while (index < numberOfRandomElements) {
    largeArray.push(Math.floor(Math.random() * 100));
    index += 1
  }

  return largeArray;
}
