const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let average = 0;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = arr[i] + sum;
  average = sum / arr.length;
}

console.log(average);
