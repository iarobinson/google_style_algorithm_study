function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

// 0, 1, 1, 2, 3, 5, 8, 13
