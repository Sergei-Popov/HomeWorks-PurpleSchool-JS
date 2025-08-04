const arr = (array, removeFunction) => {
  return array.filter(item => !removeFunction(item));
};

console.log(arr([3, 6, 9, 2], num => num > 5));