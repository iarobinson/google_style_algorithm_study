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

console.log(mostDigits([1234, 56, 7]));
console.log(mostDigits([56, 7]));
console.log(mostDigits([123456789011123, 1]));

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(7323, 2)); // 3

console.log(getDigitCount(-10)); // 2
console.log(getDigitCount(100)); // 3
console.log(getDigitCount(1000)); // 4
console.log(getDigitCount(10000)); // 5
