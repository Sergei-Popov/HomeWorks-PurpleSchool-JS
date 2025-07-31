const arr = [1, 40, -5, 10, 0];

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let el = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = el;
      }
    }
  }
};

sort(arr);

console.log(arr)