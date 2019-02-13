
function iansStringSearch(inquiry, target) {
  var countOfMatchingStringOccurences = 0;

  for (var i = 0; i < inquiry.length; i += 1) {
    if (target == inquiry.slice(i, i + target.length)) {
      countOfMatchingStringOccurences += 1;
    }
  }

  return countOfMatchingStringOccurences;
}

console.log(iansStringSearch('lorie loled', 'lol')) // 1
