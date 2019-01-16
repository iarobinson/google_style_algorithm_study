
function recursiveCountDown(numberToCountdownFrom) {
  console.log(numberToCountdownFrom)
  if (numberToCountdownFrom <= 0) {
    return 0;
  } else if (numberToCountdownFrom == 1) {
    return 1;
  } else if (numberToCountdownFrom > 1) {
    return recursiveCountDown(numberToCountdownFrom - 1)
  }
}

console.log(recursiveCountDown(1))
