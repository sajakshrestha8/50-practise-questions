//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//using recurssion

// formula for fibonnaci series
// f(n) = f(n-1) + f(n-2)

function fibonnaci(n) {
  if (n <= 1) return n;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(fibonnaci(i));
}
