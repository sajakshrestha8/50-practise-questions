//array => [-4, -3, -2, -1, 1, 2, 3, 4, 5]
//output => positive integer => [1, 2, 3, 4, 5]

let arr = [-4, -3, -2, -1, 1, 2, 3, 4, 5];
let data = [];

function positiveNumber(params) {
  params.map((value) => (value > 0 ? data.push(value) : data));
}
positiveNumber(arr);
console.log(data);
