function areThereDuplicates() {
  var setToCheck = Object.values(arguments);
  var checked = [];

  for (var i = 0; i < setToCheck.length; i += 1) {
      if (checked.indexOf(setToCheck[i]) === -1) {
          checked.push(setToCheck[i]);
      } else if (checked.indexOf(setToCheck[i]) > -1) {
          return true;
      }
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'a', 'c')); //true
