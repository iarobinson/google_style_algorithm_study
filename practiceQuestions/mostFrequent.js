let theTestData = "131321".split("");

function mostFrequent(arr) {
  let collection = {};

  for (var i = 0; i < arr.length; i += 1) {

    let stringyBucketLabel = arr[i];

    if (collection[stringyBucketLabel] === undefined) {
      collection[stringyBucketLabel] = 1;
    } else {
      collection[stringyBucketLabel] += 1;
    }
  }

  let maxNumber = -Infinity;
  let maxCount = 0;
  for (let unit in collection) {
    if (maxCount < collection[unit]) {
      maxCount = collection[unit];
      maxNumber = unit;
    }
  }

  return `The number most often occuring element is ${maxNumber} and it occured ${maxCount} times`;
}

console.log(mostFrequent(theTestData));
