const arr = [
  1, 4, 21, 25, 26, 28, 34, 45, 98, 100, 56, 57, 32, 33, 62, 66, 70, 78, 79, 83,
];

function maximum() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr[0]);
}

maximum();
