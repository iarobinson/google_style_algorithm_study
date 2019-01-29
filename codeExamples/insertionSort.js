// First we generate an array that is helpful for sorting

function generateLargeArray(numberOfRandomElements) {
  var largeArray = [];

  var index = 0;
  while (index < numberOfRandomElements) {
    largeArray.push(Math.floor(Math.random() * 100));
    index += 1;
  }

  return largeArray;
}

// We store the array
var largeArray = generateLargeArray(10);
// We store a duplicated version with built in sort so we can compare our answers
var sortedLargeArray = largeArray.slice(0).sort();

console.log(largeArray, " <= original large array");
console.log(sortedLargeArray, " <= sorted large array");

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

var bubbleSortResult = bubbleSort(largeArray);

console.log(bubbleSortResult, " <= bubblesorted largeArray");
// console.log(sortedLargeArray, " <= true if bubble sort workedresults of test");
