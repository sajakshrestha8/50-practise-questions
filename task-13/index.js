//given array =  [ 1, 4, 21, 25, 26, 28, 34, 45, 98, 100, 56, 57, 32, 33, 62, 66, 70, 78, 79, 83];
//output => maximum Number => 100

const arr = [
  1, 4, 21, 25, 26, 28, 34, 45, 98, 100, 56, 57, 32, 33, 62, 66, 70, 78, 79, 83,
];

let descendingOrder = arr.sort((a, b) => b - a);

console.log(descendingOrder[0]);
