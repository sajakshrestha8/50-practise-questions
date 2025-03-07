// output -> 0, 1, 1, 2, 3, 5, 8, 13, 21
//formula -> n3 = n1 + n2

let n1 = 0;
let n2 = 1;

console.log(n1, "\n", "s");
console.log(n2);

function fibonnaci() {
  let n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
  return n3;
}

for (let i = 0; i < 10; i++) {
  console.log(fibonnaci());
}
