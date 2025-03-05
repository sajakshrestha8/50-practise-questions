let arr = [-4, -3, -2, -1, 1, 2, 3, 4, 5];
let data = [];

function positiveNumber(params) {
  for (let i = 0; i < params.length; i++) {
    if (params[i] > 0) {
      data.push(params[i]);
    }
  }
  console.log(data);
}

positiveNumber(arr);
