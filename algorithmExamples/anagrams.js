

// This was my answer
function validAnagram(firstString, secondString) {
  var orderedString1 = firstString.split("").sort().join("");
  var orderedString2 = secondString.split("").sort().join("");

  if (orderedString1 == orderedString2) {
      return true;
  }

  return false;
}

// console.log(validAnagram("", "")) // true
// console.log(validAnagram("bannana", "bannanas")) // true
// console.log(validAnagram("freedom", "peace")) // true
// console.log(validAnagram("abab", "baba")) // true
// console.log(validAnagram("", "")) // true
// console.log(validAnagram("", "")) // true

function validAnagramTeach(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i += 1) {
    let letter = first[i];

    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup, " <= lookup at end")

  for (let i = 0; i < second.length; i += 1) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(lookup, " <= lookup at end")
  return true;
}

console.log(validAnagramTeach("", "")) // true
console.log(validAnagramTeach("bannana", "bannanas")) // false
console.log(validAnagramTeach("freedom", "peace")) // false
console.log(validAnagramTeach("abab", "baba")) // true
