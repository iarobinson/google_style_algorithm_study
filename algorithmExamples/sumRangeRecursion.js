

function sumRange(num) {
  if (num === 1) return 1; // Base case
  console.log(num);
  return num + sumRange(num - 1);
}

console.log(sumRange(4));
