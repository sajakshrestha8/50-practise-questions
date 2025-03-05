let n1 = 0;
let n2 = 1;

console.log(n1);
console.log(n2);

for (let i = 0; i <= 10; i++) {
  let temp = n1 + n2;
  n1 = n2;
  n2 = temp;
  console.log(temp);
}
