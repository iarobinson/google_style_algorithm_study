
function recursiveCountDown(numberToCountdownFrom) {
  console.log(numberToCountdownFrom)
  if (numberToCountdownFrom < 0) {
    console.log("All done!");
  } else {
    return recursiveCountDown(numberToCountdownFrom - 1)
  }
}

console.log(recursiveCountDown(5));
