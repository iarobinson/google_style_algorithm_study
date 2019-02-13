function charCount(string) {
  let result = {};
  let customRegularExpression = new RegExp(/az09/)
  for (var i = 0; i < string.length; i += 1) {
    let char = string[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("hello")); // Should return { h:1, e:1, l:2, o:1 }
console.log(charCount("my phone number is 4445545454")); // $ signs? Numbers
