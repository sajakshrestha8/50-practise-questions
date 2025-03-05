let arr = [-4, -3, -2, -1, 1, 2, 3, 4, 5];

function positiveNumber(params) {
  for (let i = 0; i < params.length; i++) {
    if (params[i] > 0) {
      console.log(params[i]);
    }
  }
}

positiveNumber(arr);
