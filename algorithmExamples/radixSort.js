const performance = require('perf_hooks').performance;


function getDigit(num, location) {
  let stringNum = num.toString();
  let resultNum = parseInt(stringNum[stringNum.length - 1 - location]);
  if (resultNum) {
    return resultNum;
  } else {
    return 0;
  }
}

function getDigitCount(num) {
  let digitCount =  Math.abs(num).toString().length;
  return digitCount;
}

function mostDigits(arr) {
  let maxDigits = -Infinity;
  for (var i = 0; i < arr.length; i += 1) {
    var digitCount = getDigitCount(arr[i])
    if (maxDigits < digitCount) {
      maxDigits = digitCount;
    }
  }
  return maxDigits;
}

function radixSort(list) {
  let numberOfDigitsTheLargestNumberHas = mostDigits(list);

  for (let i = 0; i < numberOfDigitsTheLargestNumberHas; i += 1) {
    let bucket = [[],[],[],[],[],[],[],[],[]];

    for (var j = 0; j < list.length; j += 1) {
      let number = list[j];
      bucket[getDigit(number, i)].push(number);
    }
    list = bucket.flat(2);
  }
  return list.flat();
}

function sum(a, b) {
  return a - b;
}

var ourBeautifulArray = [1, 3,4, 5, 6];
var time1 = performance.now();
console.log(radixSort(ourBeautifulArray));
var time2 = performance.now();
console.log(`RadixSort took ${time2 - time1} ms to execute`);

var time3 = performance.now();
console.log(ourBeautifulArray.sort(sum));
var time4 = performance.now();
console.log(`Normal JS sort took ${time4 - time3} ms to execute`);

// console.log(mostDigits([1234, 56, 7]));
// console.log(mostDigits([56, 7]));
// console.log(mostDigits([123456789011123, 1]));
//
// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(7323, 2)); // 3
//
// console.log(getDigitCount(-10)); // 2
// console.log(getDigitCount(100)); // 3
// console.log(getDigitCount(1000)); // 4
// console.log(getDigitCount(10000)); // 5
